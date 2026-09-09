import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import { palettes } from '../data/palettes'

/** Convert hex to oklch string for glow effects */
function hexToOklch(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  // linear RGB
  const lr = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
  const lg = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
  const lb = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)

  // sRGB to OKLab
  const l_ = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb
  const m_ = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb
  const s_ = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb

  const l = Math.cbrt(l_)
  const m = Math.cbrt(m_)
  const s = Math.cbrt(s_)

  const L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s
  const A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s

  const C = Math.sqrt(A * A + B * B)
  let H = Math.atan2(B, A) * (180 / Math.PI)
  if (H < 0) H += 360

  return alpha < 1
    ? `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${H.toFixed(0)} / ${alpha})`
    : `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${H.toFixed(0)})`
}

const PaletteContext = createContext()

const STORAGE_KEY = 'rikicatte-palette'

export function PaletteProvider({ children }) {
  const [paletteId, setPaletteId] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || palettes[0].id
    } catch {
      return palettes[0].id
    }
  })

  const palette = useMemo(
    () => palettes.find(p => p.id === paletteId) || palettes[0],
    [paletteId]
  )

  useEffect(() => {
    const root = document.documentElement
    // Reset to defaults first, then apply palette overrides
    Object.entries(palette.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    // Compute glow/shadow vars from primary color
    root.style.setProperty('--color-primary-glow', hexToOklch(palette.vars['--color-primary'], 0.18))
    root.style.setProperty('--color-primary-glow-strong', hexToOklch(palette.vars['--color-primary'], 0.35))
    root.style.setProperty('--color-secondary-glow', hexToOklch(palette.vars['--color-secondary'], 0.15))
    root.style.setProperty('--shadow-glow', `0 0 40px ${hexToOklch(palette.vars['--color-primary'], 0.18)}, 0 0 80px ${hexToOklch(palette.vars['--color-primary'], 0.08)}`)
    root.style.setProperty('--shadow-glow-sm', `0 0 20px ${hexToOklch(palette.vars['--color-primary'], 0.18)}`)
    // Orb / cursor glow colors derived from palette
    root.style.setProperty('--color-orb-1', hexToOklch(palette.vars['--color-primary'], 0.22))
    root.style.setProperty('--color-orb-2', hexToOklch(palette.vars['--color-secondary'], 0.14))
    root.style.setProperty('--color-spotlight', hexToOklch(palette.vars['--color-primary'], 0.09))
    try {
      localStorage.setItem(STORAGE_KEY, paletteId)
    } catch {
      // storage may be unavailable (private mode)
    }
  }, [palette.vars, paletteId])

  const select = useCallback((id) => {
    setPaletteId(id)
  }, [])

  return (
    <PaletteContext.Provider value={{ palette, paletteId, palettes, select }}>
      {children}
    </PaletteContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePalette() {
  const ctx = useContext(PaletteContext)
  if (!ctx) throw new Error('usePalette must be used within PaletteProvider')
  return ctx
}
