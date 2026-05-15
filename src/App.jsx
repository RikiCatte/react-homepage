import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { AnimatePresence } from 'motion/react'
import CursorGlow from './components/CursorGlow'
import GridLines from './components/GridLines'
import HeroName from './components/HeroName'
import SocialLinks from './components/SocialLinks'
import StatusBadge from './components/StatusBadge'
import ScrollHint from './components/ScrollHint'
import PortfolioSection from './components/portfolio/PortfolioSection'
import LangToggle from './components/portfolio/LangToggle'
import styles from './App.module.css'

function AppInner() {
    const location = useLocation()
    const [portfolioVisible, setPortfolioVisible] = useState(false)

    useEffect(() => {
        if (location.pathname === '/portfolio') {
            const el = document.getElementById('portfolio')
            if (el) {
                // Piccolo delay per assicurarsi che il DOM sia pronto
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
            }
        }
    }, [location.pathname])

    return (
        <>
            <CursorGlow />
            <GridLines />
            <LangToggle visible={portfolioVisible} />

            <main className={styles.main}>
                {/* Sezione 1 — Hero / Homepage */}
                <section id="home" className={styles.hero} aria-label="Presentazione">
                    <div className={styles.content}>
                        <StatusBadge text="Ready to explore" />
                        <HeroName />
                        <SocialLinks />
                    </div>

                    {/* Sezione 2 — Portfolio */}
                    <AnimatePresence mode="wait">
                        {!portfolioVisible ? (
                            <ScrollHint key="down" direction="down" />
                        ) : (
                            <ScrollHint key="up" direction="up" />
                        )}
                    </AnimatePresence>
                </section>

                <PortfolioSection onVisibilityChange={setPortfolioVisible} />
            </main>
        </>
    )
}

export default function App() {
    return (
        <LanguageProvider>
            <AppInner />
        </LanguageProvider>
    )
}