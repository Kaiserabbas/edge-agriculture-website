import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext.jsx'
import Icon from './Icon.jsx'

export default function PageHero({ eyebrow, title, body, image, ctaTo, ctaLabel }) {
  const { text } = useLocale()

  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <img src={image} alt="" loading="eager" />
      </div>
      <div className="container page-hero__content">
        {eyebrow && <p className="eyebrow">{text(eyebrow)}</p>}
        <h1>{text(title)}</h1>
        {body && <p>{text(body)}</p>}
        {ctaTo && ctaLabel && (
          <Link className="button button-primary" to={ctaTo}>
            {text(ctaLabel)}
            <Icon name="arrowRight" size={18} />
          </Link>
        )}
      </div>
    </section>
  )
}
