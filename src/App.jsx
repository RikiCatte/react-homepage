import CursorGlow from './components/CursorGlow'
import GridLines from './components/GridLines'
import HeroName from './components/HeroName'
import SocialLinks from './components/SocialLinks'
import StatusBadge from './components/StatusBadge'
import ScrollHint from './components/ScrollHint'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      {/* Background layers */}
      <CursorGlow />
      <GridLines />

      {/* Page content */}
      <main className={styles.main}>
        <section className={styles.hero} aria-label="Presentazione">
          <div className={styles.content}>
            <StatusBadge text="Open to work" />
            <HeroName />
            <SocialLinks />
          </div>
          <ScrollHint />
        </section>
      </main>
    </>
  )
}