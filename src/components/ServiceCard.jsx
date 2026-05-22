import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext.jsx'
import Icon from './Icon.jsx'

export default function ServiceCard({ service }) {
  const { label, text } = useLocale()

  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt={text(service.title)} loading="lazy" />
      </div>
      <div className="service-card__body">
        <span className="icon-badge">
          <Icon name={service.icon} />
        </span>
        <h3>{text(service.title)}</h3>
        <p>{text(service.summary)}</p>
        <Link className="card-link" to={`/services/${service.slug}`}>
          {label('viewDetails')}
          <Icon name="arrowRight" size={17} />
        </Link>
      </div>
    </article>
  )
}
