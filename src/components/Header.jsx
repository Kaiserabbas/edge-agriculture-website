import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useLocale } from '../context/LocaleContext.jsx'
import { assets, navItems } from '../data/siteContent.js'
import Icon from './Icon.jsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { count } = useCart()
  const { label, toggleLocale } = useLocale()

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img className="brand-logo brand-logo--header" src={assets.logo} alt="EDGE Agricultural" />
        </Link>

        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {label(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button className="language-toggle" type="button" onClick={toggleLocale}>
            <Icon name="languages" size={18} />
            {label('language')}
          </button>
          <Link className="cart-link" to="/cart" aria-label={label('cart')}>
            <Icon name="shoppingCart" size={19} />
            {count > 0 && <span>{count}</span>}
          </Link>
          <Link className="button button-primary header-quote" to="/contact">
            {label('getQuote')}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
