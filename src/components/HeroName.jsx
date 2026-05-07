import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import styles from './HeroName.module.css'

const LETTERS = 'RikiCatte'.split('')

export default function HeroName() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tagline}>
                <span className={styles.mono}>&lt;</span>
                <span>developer</span>
                <span className={styles.mono}>/&gt;</span>
            </div>

            <motion.h1
                className={styles.name}
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
                }}
                aria-label="RikiCatte"
            >
                {LETTERS.map((char, i) => (
                    <AnimatedLetter key={i} char={char} index={i} />
                ))}
            </motion.h1>

            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
                Full-stack dev · Cloud & DevOps · Open source builder
            </motion.p>
        </div>
    )
}

function AnimatedLetter({ char }) {
    const ref = useRef(null)
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)
    const springX = useSpring(rotateX, { damping: 20, stiffness: 200 })
    const springY = useSpring(rotateY, { damping: 20, stiffness: 200 })

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = (e.clientX - cx) / 60
            const dy = (e.clientY - cy) / 60
            rotateY.set(dx * 15)
            rotateX.set(-dy * 10)
        }

        const handleLeave = () => {
            rotateX.set(0)
            rotateY.set(0)
        }

        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleLeave)
        return () => {
            el.removeEventListener('mousemove', handleMouseMove)
            el.removeEventListener('mouseleave', handleLeave)
        }
    }, [rotateX, rotateY])

    return (
        <motion.span
            ref={ref}
            className={styles.letter}
            style={{ rotateX: springX, rotateY: springY, transformPerspective: 500 }}
            variants={{
                hidden: { opacity: 0, y: 40, rotateX: -30 },
                show: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: 'spring', damping: 18, stiffness: 180 }
                }
            }}
        >
            {char}
        </motion.span>
    )
}