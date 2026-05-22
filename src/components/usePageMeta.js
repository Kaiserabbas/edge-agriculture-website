import { useEffect } from 'react'
import { useLocale } from '../context/LocaleContext.jsx'

export default function usePageMeta(title, description) {
  const { text } = useLocale()

  useEffect(() => {
    document.title = `${text(title)} | EDGE Agriculture`

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', text(description))
    }
  }, [description, text, title])
}
