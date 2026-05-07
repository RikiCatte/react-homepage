import styles from './CursorGlow.module.css'
import { useCursorGlow } from '../hooks/useCursorGlow'

export default function CursorGlow() {
    useCursorGlow()

    return (
        <div className={styles.root} aria-hidden="true">
            <div className={styles.grain} />
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.spotlight} />
        </div>
    )
}