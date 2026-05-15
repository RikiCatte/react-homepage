import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import styles from './LangToggle.module.css'

export default function LangToggle({ visible }) {
    const { lang, toggle } = useLang()
    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    className={styles.toggle}
                    onClick={toggle}
                    aria-label={lang === 'it' ? 'Switch to English' : "Passa all'italiano"}
                    initial={{ opacity: 0, y: -12, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                >
                    <span className={lang === 'it' ? styles.active : styles.inactive}>IT</span>
                    <span className={styles.sep}>|</span>
                    <span className={lang === 'en' ? styles.active : styles.inactive}>EN</span>
                </motion.button>
            )}
        </AnimatePresence>
    )
}