import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './SocialLinks.module.css'

const DISCORD_USERNAME = 'rikicatte'

const LINKS = [
    {
        id: 'discord',
        label: 'Discord',
        type: 'copy',
        copyValue: DISCORD_USERNAME,
        copyLabel: 'Username Copied!',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
        ),
    },
    {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://instagram.com/rikicattee',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
    },
    {
        id: 'email',
        label: 'Email',
        href: 'mailto:github@rikicatte.it',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        id: 'github',
        label: 'Projects',
        href: 'https://github.com/RikiCatte',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        id: 'cv',
        label: 'Curriculum Vitae',
        type: 'cv',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
]

const CV_OPTIONS = [
    { lang: 'it', label: 'Italiano', href: '/cv_ita.pdf', flag: '🇮🇹' },
    { lang: 'en', label: 'English', href: '/cv_eng.pdf', flag: '🇬🇧' },
]

function CvButton({ sharedProps }) {
    const [open, setOpen] = useState(false)
    const closeTimer = useRef(null)

    const handleMouseEnter = () => {
        clearTimeout(closeTimer.current)
        setOpen(true)
    }

    const handleMouseLeave = () => {
        // Piccolo delay per permettere di spostarsi sul submenu
        closeTimer.current = setTimeout(() => setOpen(false), 120)
    }

    return (
        <div
            className={styles.cvWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.button
                type="button"
                {...sharedProps}
                data-id="cv"
                data-open={open || undefined}
                aria-label="Curriculum Vitae — scegli la lingua"
                aria-expanded={open}
            >
                <span className={styles.icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </span>
                <span className={styles.tooltip}>Curriculum Vitae</span>
            </motion.button>

            {/* Submenu bandiere */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className={styles.cvMenu}
                        role="menu"
                        aria-label="Scegli la lingua del CV"
                        initial={{ opacity: 0, y: -6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {CV_OPTIONS.map((opt) => (
                            <a
                                key={opt.lang}
                                href={opt.href}
                                className={styles.cvOption}
                                role="menuitem"
                                aria-label={`CV in ${opt.label}`}
                                onClick={() => setOpen(false)}
                            >
                                <span className={styles.cvFlag} aria-hidden="true">{opt.flag}</span>
                                <span className={styles.cvLang}>{opt.label}</span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

export default function SocialLinks() {
    const [copiedId, setCopiedId] = useState(null)

    const handleCopy = async (item) => {
        try {
            await navigator.clipboard.writeText(item.copyValue)
            setCopiedId(item.id)
            setTimeout(() => setCopiedId(null), 2000)
        } catch {
            // fallback per browser senza clipboard API
            const el = document.createElement('textarea')
            el.value = item.copyValue
            el.style.position = 'fixed'
            el.style.opacity = '0'
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
            setCopiedId(item.id)
            setTimeout(() => setCopiedId(null), 2000)
        }
    }

    return (
        <motion.nav
            className={styles.nav}
            aria-label="Social links and resources"
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 1.2 } }
            }}
        >
            {LINKS.map((link) => {
                const isCopied = copiedId === link.id

                const sharedMotionProps = {
                    className: styles.link,
                    variants: {
                        hidden: { opacity: 0, scale: 0.7 },
                        show: {
                            opacity: 1,
                            scale: 1,
                            transition: { type: 'spring', damping: 20, stiffness: 260 }
                        }
                    },
                    whileHover: { scale: 1.18, y: -3 },
                    whileTap: { scale: 0.93 },
                }

                if (link.type === 'cv') {
                    return (
                        <motion.div
                            key={link.id}
                            variants={sharedMotionProps.variants}
                            style={{ position: 'relative' }}
                        >
                            <CvButton sharedProps={sharedMotionProps} />
                        </motion.div>
                    )
                }

                const content = (
                    <>
                        <span className={styles.icon}>
                            <AnimatePresence mode="wait" initial={false}>
                                {isCopied ? (
                                    <motion.svg
                                        key="check"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2.5"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        aria-hidden="true"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.5, opacity: 0 }}
                                        transition={{ type: 'spring', damping: 18, stiffness: 300 }}
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </motion.svg>
                                ) : (
                                    <motion.span
                                        key="icon"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.5, opacity: 0 }}
                                        transition={{ type: 'spring', damping: 18, stiffness: 300 }}
                                    >
                                        {link.icon}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </span>
                        <span className={styles.tooltip}>
                            {link.type === 'copy'
                                ? (isCopied ? link.copyLabel : link.copyValue)
                                : link.label}
                        </span>
                    </>
                )

                if (link.type === 'copy') {
                    return (
                        <motion.button
                            key={link.id}
                            {...sharedMotionProps}
                            data-id={link.id}
                            data-copied={isCopied || undefined}
                            type="button"
                            aria-label={isCopied ? `Username copied: ${link.copyValue}` : `Copy Discord username`}
                            onClick={() => handleCopy(link)}
                        >
                            {content}
                        </motion.button>
                    )
                }

                return (
                    <motion.a
                        key={link.id}
                        {...sharedMotionProps}
                        data-id={link.id}
                        aria-label={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                    >
                        {content}
                    </motion.a>
                )
            })}
        </motion.nav>
    )
}