import { useLocale } from '../context/LocaleContext.jsx'

export default function CategoryChips({ items, active, onChange, getLabel }) {
  const { label, text } = useLocale()

  return (
    <div className="chips" role="list" aria-label={label('search')}>
      <button
        className={active === 'all' ? 'chip is-active' : 'chip'}
        type="button"
        onClick={() => onChange('all')}
      >
        {label('all')}
      </button>
      {items.map((item) => (
        <button
          className={active === item.slug ? 'chip is-active' : 'chip'}
          type="button"
          key={item.slug}
          onClick={() => onChange(item.slug)}
        >
          {text(getLabel ? getLabel(item) : item.title || item.label)}
        </button>
      ))}
    </div>
  )
}
