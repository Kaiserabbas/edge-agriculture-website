import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext.jsx'
import { assets, contactInfo, navItems, productCategories, services } from '../data/siteContent.js'
import Icon from './Icon.jsx'

export default function Footer() {
  const { label, text } = useLocale()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <img className="brand-logo brand-logo--footer" src={assets.logo} alt="EDGE Agricultural" />
          </Link>
          <p>
            {text({
              en: 'A one-stop green solution for Dubai landscaping, irrigation, nursery plants, and garden supplies.',
              ar: 'حل أخضر متكامل في دبي لتنسيق الحدائق والري ونباتات المشتل ومستلزمات الزراعة.',
            })}
          </p>
          <div className="social-row">
            <a href="https://instagram.com/edgeagri" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="https://facebook.com/edgeagri" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
          </div>
        </div>

        <div>
          <h2>{label('services')}</h2>
          <ul className="footer-list">
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{text(service.title)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{label('products')}</h2>
          <ul className="footer-list">
            {productCategories.map((category) => (
              <li key={category.slug}>
                <Link to={`/products/${category.slug}`}>{text(category.title)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{label('contact')}</h2>
          <ul className="footer-list contact-list">
            <li>
              <Icon name="phone" size={17} />
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <Icon name="phone" size={17} />
              <a href={`tel:${contactInfo.landline}`}>{contactInfo.landline}</a>
            </li>
            {contactInfo.contacts.slice(0, 2).map((person) => (
              <li key={person.phone}>
                <Icon name="phone" size={17} />
                <span>{person.name}: {person.phone}</span>
              </li>
            ))}
            <li>
              <Icon name="mapPin" size={17} />
              <span>{text(contactInfo.address)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 EDGE Agriculture</span>
        <div>
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.to} to={item.to}>
              {label(item.label)}
            </Link>
          ))}
          <Link to="/legal">{label('legal')}</Link>
        </div>
      </div>
    </footer>
  )
}
