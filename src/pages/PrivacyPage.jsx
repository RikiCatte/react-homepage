import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import CursorGlow from '../components/CursorGlow'
import GridLines from '../components/GridLines'
import styles from './PrivacyPage.module.css'

const LAST_UPDATE = '15 Maggio 2026'

export default function PrivacyPage() {
    const navigate = useNavigate()

    return (
        <>
            <CursorGlow />
            <GridLines />
            <main className={styles.main}>
                <motion.article
                    className={styles.article}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <button className={styles.back} onClick={() => navigate('/')} aria-label="Torna alla homepage">
                        ← Torna alla homepage
                    </button>

                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.meta}>Ultimo aggiornamento: {LAST_UPDATE}</p>

                    <section className={styles.section}>
                        <h2>Titolare del trattamento</h2>
                        <p>
                            Il titolare del trattamento dei dati è raggiungibile all'indirizzo email:{' '}
                            <a href="mailto:personale@rikicatte.it" className={styles.link}>
                                personale@rikicatte.it
                            </a>
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Dati trattati e finalità</h2>
                        <p>
                            Questo sito web non raccoglie, non memorizza e non trasferisce a terzi
                            alcun dato personale degli utenti tramite form, cookie o strumenti di tracciamento.
                        </p>
                        <p>
                            Il server web (Caddy) registra automaticamente nei propri log tecnici
                            l'indirizzo IP del visitatore, la data e l'ora della richiesta e la pagina richiesta.
                            Questi dati sono trattati esclusivamente per finalità di sicurezza informatica
                            e diagnostica tecnica, sulla base del legittimo interesse del titolare
                            ai sensi dell'art. 6, par. 1, lett. f) del Regolamento UE 2016/679 (GDPR).
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Conservazione dei dati</h2>
                        <p>
                            I log del server vengono conservati per un massimo di <strong>7 giorni</strong>,
                            dopodiché vengono eliminati automaticamente.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Cookie</h2>
                        <p>
                            Questo sito non utilizza cookie di profilazione, cookie di marketing
                            né strumenti di analisi del comportamento degli utenti (es. Google Analytics).
                            Non è presente alcun cookie banner perché non ve n'è necessità.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Trasferimento a terze parti</h2>
                        <p>
                            Nessun dato personale viene trasferito a soggetti terzi.
                            Tutti i servizi tecnici (server web, font, contenuti statici) sono ospitati
                            su infrastruttura gestita direttamente dal titolare.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Diritti dell'interessato</h2>
                        <p>
                            In conformità agli artt. 15-22 del GDPR, l'utente ha il diritto di accedere,
                            rettificare, cancellare o limitare il trattamento dei propri dati,
                            nonché di proporre reclamo al Garante per la protezione dei dati personali
                            (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                www.garanteprivacy.it
                            </a>).
                            Per esercitare questi diritti, è possibile contattare il titolare
                            all'indirizzo email indicato sopra.
                        </p>
                    </section>
                </motion.article>
            </main>
        </>
    )
}