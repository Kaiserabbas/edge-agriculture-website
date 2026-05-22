import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext.jsx'
import Icon from './Icon.jsx'

export default function SectionHeader({ eyebrow, title, body, actionTo, actionLabel }) {
  const { text } = useLocale()

  return (
    <div className="section-header">
      <div>
        {eyebrow && <p className="eyebrow">{text(eyebrow)}</p>}
        <h2>{text(title)}</h2>
        {body && <p className="section-lede">{text(body)}</p>}
      </div>
      {actionTo && actionLabel && (
        <Link className="text-link" to={actionTo}>
          {text(actionLabel)}
          <Icon name="arrowRight" size={18} />
        </Link>
      )}
    </div>
  )
}
