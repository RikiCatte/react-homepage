import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { PROJECTS, PORTFOLIO_META } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './PortfolioSection.module.css'

/**
 * Sezione portfolio.
 * Espone `onVisibilityChange(bool)` → il parent lo usa per mostrare/nascondere LangToggle.
 */
export default function PortfolioSection({ onVisibilityChange }) {
    const { lang } = useLang()
    const sectionRef = useRef(null)
    const [, forceUpdate] = useState(0)

    // IntersectionObserver: notifica il parent quando la sezione è visibile
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => onVisibilityChange?.(entry.isIntersecting),
            { threshold: 0.08 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [onVisibilityChange])

    // Forza re-render al cambio lingua per aggiornare il meta testo
    const meta = PORTFOLIO_META
    const lastUpdate = lang === 'it' ? meta.lastUpdateIt : meta.lastUpdateEn
    const countLabel = lang === 'it'
        ? `// ${PROJECTS.length} progetti · ultimo aggiornamento ${lastUpdate}`
        : `// ${PROJECTS.length} projects · last updated ${lastUpdate}`

    const headingIt = 'Progetti'
    const headingEn = 'Projects'
    const subIt = 'Cosa ho costruito, cosa sto costruendo.'
    const subEn = "What I've built, what I'm building."

    // Separa featured e non
    const featured = PROJECTS.filter(p => p.featured)
    const others = PROJECTS.filter(p => !p.featured)

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className={styles.section}
            aria-label={lang === 'it' ? 'Portfolio' : 'Portfolio'}
        >
            {/* Heading */}
            <motion.div
                className={styles.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className={styles.metaLine}>{countLabel}</span>
                <h1 className={styles.title}>
                    {lang === 'it' ? headingIt : headingEn}
                </h1>
                <p className={styles.subtitle}>
                    {lang === 'it' ? subIt : subEn}
                </p>
            </motion.div>

            {/* Featured grid */}
            {featured.length > 0 && (
                <div className={styles.featuredGrid}>
                    {featured.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
            )}

            {/* Others grid */}
            {others.length > 0 && (
                <>
                    <motion.p
                        className={styles.sectionLabel}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {lang === 'it' ? '// altri progetti' : '// other projects'}
                    </motion.p>
                    <div className={styles.othersGrid}>
                        {others.map((p, i) => (
                            <ProjectCard key={p.id} project={p} index={i} />
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}