import * as React from 'react'

export type Langage = 'ja' | 'en'

export type I18nContextType = {
  selectedLanguage: Langage
  setLanguage: (lang: Langage) => void
}

const I18nContext = React.createContext<I18nContextType>({
  selectedLanguage: 'ja',
  setLanguage: () => {
    throw Error()
  },
})

export const useI18n = (): I18nContextType => React.useContext(I18nContext)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Langage>('ja')

  React.useEffect(() => {
    const localLang = localStorage.getItem('lang')
    if (localLang === 'en') {
      setSelectedLanguage('en')
    }
  }, [])

  const setLanguage = React.useCallback((lang: Langage) => {
    localStorage.setItem('lang', lang)
    setSelectedLanguage(lang)
  }, [])
  return (
    <I18nContext.Provider value={{ selectedLanguage, setLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}
