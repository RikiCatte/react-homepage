import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('it')
    const toggle = () => setLang(l => l === 'it' ? 'en' : 'it')
    return (
        <LanguageContext.Provider value={{ lang, toggle }}>
            {children}
        </LanguageContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
    return ctx
}