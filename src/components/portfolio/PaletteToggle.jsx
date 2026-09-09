import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { usePalette } from '../../context/PaletteContext'
import styles from './PaletteToggle.module.css'

export default function PaletteToggle() {
  const { palette, palettes, select } = usePalette()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.button
        className={styles.trigger}
        onClick={() => setOpen(v => !v)}
        aria-label="Choose color palette"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        {/* Marble orb showing current palette colors */}
        <span
          className={styles.orb}
          style={{
            '--orb-color-1': palette.vars['--color-primary'],
            '--orb-color-2': palette.vars['--color-secondary'],
          }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
          >
            <span className={styles.label}>Palette</span>
            {palettes.map(p => (
              <button
                key={p.id}
                className={`${styles.option} ${p.id === palette.id ? styles.selected : ''}`}
                onClick={() => { select(p.id); setOpen(false) }}
              >
                <span className={styles.swatches}>
                  {p.preview.map((color, i) => (
                    <span
                      key={i}
                      className={styles.swatch}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
                <span className={styles.name}>{p.label}</span>
                {p.id === palette.id && <span className={styles.check}>✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
