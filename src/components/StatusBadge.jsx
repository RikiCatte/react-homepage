import { motion } from 'motion/react'
import styles from './StatusBadge.module.css'

export default function StatusBadge({ text = 'Open to work' }) {
    return (
        <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.1 }}
        >
            <span className={styles.dot} aria-hidden="true" />
            <span>{text}</span>
        </motion.div>
    )
}