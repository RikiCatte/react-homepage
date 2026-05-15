import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import ServiceIcon from './ServiceIcon'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
    const { lang } = useLang()
    const [expanded, setExpanded] = useState(false)

    const title = lang === 'it' ? project.titleIt : project.titleEn
    const shortDesc = lang === 'it' ? project.shortDescIt : project.shortDescEn
    const details = lang === 'it' ? project.detailsIt : project.detailsEn

    return (
        <motion.article
            className={`${styles.card} ${project.featured ? styles.featured : ''}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.meta}>
                    {project.featured && (
                        <span className={styles.featuredBadge}>
                            <span className={styles.featuredDot} aria-hidden="true" />
                            {lang === 'it' ? 'In evidenza' : 'Featured'}
                        </span>
                    )}
                    <h2 className={styles.title}>{title}</h2>
                </div>
            </div>

            {/* Description */}
            <p className={styles.desc}>{shortDesc}</p>

            {/* Tags */}
            <div className={styles.tags} role="list" aria-label="Tecnologie">
                {project.tags.map(tag => (
                    <span key={tag} className={styles.tag} role="listitem">{tag}</span>
                ))}
            </div>

            {/* Expandable services list (only for raspberry-type cards) */}
            {project.expandable && details && (
                <div className={styles.expandWrapper}>
                    <button
                        className={styles.expandBtn}
                        onClick={() => setExpanded(v => !v)}
                        aria-expanded={expanded}
                        aria-controls={`details-${project.id}`}
                    >
                        <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.expandIcon}
                            aria-hidden="true"
                        >
                            ↓
                        </motion.span>
                        {expanded
                            ? (lang === 'it' ? 'Nascondi servizi' : 'Hide services')
                            : (lang === 'it' ? 'Mostra tutti i servizi' : 'Show all services')}
                    </button>

                    <AnimatePresence initial={false}>
                        {expanded && (
                            <motion.div
                                id={`details-${project.id}`}
                                className={styles.details}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <p className={styles.detailsIntro}>{details.intro}</p>
                                <ul className={styles.serviceList} role="list">
                                    {details.services.map(s => (
                                        <li key={s.name} className={styles.serviceItem}>
                                            <span className={styles.serviceIcon}>
                                                <ServiceIcon name={s.icon} size={15} />
                                            </span>
                                            <span className={styles.serviceName}>{s.name}</span>
                                            <span className={styles.serviceDesc}>{s.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Links */}
            {project.links && project.links.length > 0 && (
                <div className={styles.links}>
                    {project.links.map((link, i) => {
                        const label = lang === 'it' ? link.labelIt : link.labelEn
                        if (!link.url) {
                            return (
                                <span key={i} className={`${styles.linkBtn} ${styles.linkDisabled}`} aria-label={label}>
                                    <ServiceIcon name="lock" size={14} />
                                    {label}
                                </span>
                            )
                        }
                        return (
                            <a
                                key={i}
                                href={link.url}
                                target={link.external ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className={styles.linkBtn}
                                aria-label={label}
                            >
                                <ServiceIcon name={link.icon} size={14} />
                                {label}
                                {link.external && <ServiceIcon name="external" size={12} />}
                            </a>
                        )
                    })}
                </div>
            )}
        </motion.article>
    )
}