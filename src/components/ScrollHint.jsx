import { motion } from 'motion/react'
import styles from './ScrollHint.module.css'

export default function ScrollHint() {
    return (
        <motion.div
            className={styles.hint}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
        >
            <motion.div
                className={styles.mouse}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className={styles.wheel} />
            </motion.div>
        </motion.div>
    )
}