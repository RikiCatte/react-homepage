import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import styles from './ScrollHint.module.css'

export default function ScrollHint({ direction = 'down' }) {
    const isUp = direction === 'up'
    const [footerVisible, setFooterVisible] = useState(false)

    useEffect(() => {
        const footer = document.querySelector('footer')
        if (!footer) return

        const observer = new IntersectionObserver(
            ([entry]) => setFooterVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        observer.observe(footer)
        return () => observer.disconnect()
    }, [])

    return (
        <AnimatePresence mode="wait">
            {!footerVisible && (
                isUp ? (
                    // Freccia pulsante verso l'alto — appare alla fine della sezione portfolio
                    <motion.button
                        key="up"
                        className={styles.arrowUp}
                        onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                        aria-label="Torna in cima"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.93 }}
                    >
                        <motion.svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <polyline points="18 15 12 9 6 15" />
                        </motion.svg>
                    </motion.button>
                ) : (
                    // Mouse con rotella verso il basso — appare nella hero
                    <motion.div
                        key="down"
                        className={styles.hint}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                    >
                        <div className={styles.mouse}>
                            <div className={styles.wheelDown} />
                        </div>
                    </motion.div>
                )
            )}
        </AnimatePresence>
    )
}