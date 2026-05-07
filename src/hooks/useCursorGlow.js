import { useEffect, useRef, useCallback } from 'react'

/**
 * Tracks mouse/touch position and updates CSS custom properties
 * --cursor-x and --cursor-y on document.documentElement.
 * Used to drive the radial gradient background effect.
 */
export function useCursorGlow(targetRef) {
    const rafId = useRef(null)
    const pos = useRef({ x: -100, y: -100 })

    const flush = useCallback(() => {
        const el = targetRef?.current ?? document.documentElement
        el.style.setProperty('--cursor-x', `${pos.current.x}px`)
        el.style.setProperty('--cursor-y', `${pos.current.y}px`)
        rafId.current = null
    }, [targetRef])

    useEffect(() => {
        const handleMove = (e) => {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
            const clientY = e.touches ? e.touches[0].clientY : e.clientY
            pos.current = { x: clientX, y: clientY }
            if (!rafId.current) {
                rafId.current = requestAnimationFrame(flush)
            }
        }

        window.addEventListener('mousemove', handleMove, { passive: true })
        window.addEventListener('touchmove', handleMove, { passive: true })

        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('touchmove', handleMove)
            if (rafId.current) cancelAnimationFrame(rafId.current)
        }
    }, [flush])
}