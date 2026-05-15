import { useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
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
import PrivacyPage from './pages/PrivacyPage'
import styles from './App.module.css'

function MainPage() {
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

                    <AnimatePresence mode="wait">
                        {!portfolioVisible ? (
                            <ScrollHint key="down" direction="down" />
                        ) : (
                            <ScrollHint key="up" direction="up" />
                        )}
                    </AnimatePresence>
                </section>

                {/* Sezione 2 — Portfolio */}
                <PortfolioSection onVisibilityChange={setPortfolioVisible} />

                {/* Footer con link privacy */}
                <footer className={styles.footer}>
                    <a href="/privacy" className={styles.privacyLink}>Privacy Policy</a>
                </footer>
            </main>
        </>
    )
}

function AppInner() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/portfolio" element={<MainPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<MainPage />} />
        </Routes>
    )
}

export default function App() {
    return (
        <LanguageProvider>
            <AppInner />
        </LanguageProvider>
    )
}