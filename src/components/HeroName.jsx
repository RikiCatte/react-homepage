import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'
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
                <span className={styles.nameInner} aria-hidden="true">
                    {LETTERS.map((char, i) => (
                        <AnimatedLetter key={i} char={char} index={i} />
                    ))}
                </span>
            </motion.h1>

            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
                Full-stack dev · Cloud & DevOps · Self-Hoster · AI · Networking · CyberSecurity
            </motion.p>
        </div>
    )
}

function AnimatedLetter({ char }) {
    const ref = useRef(null)
    const reducedMotion = useReducedMotion()

    // Su mobile disabilita il tilt 3D (perché problematico)
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)
    const springX = useSpring(rotateX, { damping: 20, stiffness: 200 })
    const springY = useSpring(rotateY, { damping: 20, stiffness: 200 })

    useEffect(() => {
        // Non attiva il mouse tracking su touch/mobile
        if (isTouch || reducedMotion) return
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
    }, [rotateX, rotateY, isTouch, reducedMotion])

    // Su mobile nessuna trasformazione 3D
    const motionStyle = (!isTouch && !reducedMotion)
        ? { rotateX: springX, rotateY: springY, transformPerspective: 500 }
        : {}

    return (
        <motion.span
            ref={ref}
            className={styles.letter}
            style={motionStyle}
            variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', damping: 18, stiffness: 180 }
                }
            }}
        >
            {char}
        </motion.span>
    )
}