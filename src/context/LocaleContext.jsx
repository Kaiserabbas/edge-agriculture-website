import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { labels } from '../data/siteContent.js'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem('edge-locale') || 'en')
  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    localStorage.setItem('edge-locale', locale)
    document.documentElement.lang = locale
    document.documentElement.dir = direction
  }, [direction, locale])

  const value = useMemo(
    () => ({
      locale,
      direction,
      isArabic: locale === 'ar',
      setLocale,
      toggleLocale: () => setLocale((current) => (current === 'en' ? 'ar' : 'en')),
      label: (key) => labels[key]?.[locale] || key,
      text: (valueToTranslate) => {
        if (!valueToTranslate) return ''
        if (typeof valueToTranslate === 'string') return valueToTranslate
        return valueToTranslate[locale] || valueToTranslate.en || ''
      },
    }),
    [direction, locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider')
  }
  return context
}
