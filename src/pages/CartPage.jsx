import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useCart } from '../context/CartContext.jsx'
import { useLocale } from '../context/LocaleContext.jsx'
import { formatCurrency } from '../utils.js'

export default function CartPage() {
  const { items, removeItem, subtotal, updateQuantity } = useCart()
  const { label, text } = useLocale()

  usePageMeta(
    { en: 'Cart', ar: 'السلة' },
    {
      en: 'Review selected EDGE Agriculture products and nursery plants before checkout.',
      ar: 'راجع منتجات EDGE Agriculture ونباتات المشتل المختارة قبل الدفع.',
    },
  )

  return (
    <section className="section cart-page">
      <div className="container">
        <SectionHeader
          eyebrow={{ en: 'Cart', ar: 'السلة' }}
          title={{ en: 'Review selected items', ar: 'راجع العناصر المختارة' }}
          body={{
            en: 'This cart is ready for a future payment gateway or quote-based checkout.',
            ar: 'هذه السلة جاهزة لاحقا لبوابة دفع أو طلب تسعير.',
          }}
        />

        {items.length === 0 ? (
          <div className="empty-state">
            <Icon name="shoppingCart" size={34} />
            <p>{label('emptyCart')}</p>
            <Link className="button button-primary" to="/products">
              {label('continueShopping')}
            </Link>
          </div>
        ) : (
          <div className="cart-grid">
            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={text(item.name)} />
                  <div>
                    <h2>{text(item.name)}</h2>
                    <p>{formatCurrency(item.price)}</p>
                  </div>
                  <div className="quantity-control">
                    <button
                      className="icon-button"
                      type="button"
                      aria-label="Decrease"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Icon name="minus" size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="icon-button"
                      type="button"
                      aria-label="Increase"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="plus" size={16} />
                    </button>
                  </div>
                  <button className="remove-button" type="button" onClick={() => removeItem(item.id)}>
                    {text({ en: 'Remove', ar: 'حذف' })}
                  </button>
                </article>
              ))}
            </div>
            <aside className="summary-panel">
              <h2>{label('subtotal')}</h2>
              <strong>{formatCurrency(subtotal)}</strong>
              <Link className="button button-primary" to="/checkout">
                {label('proceedCheckout')}
                <Icon name="arrowRight" size={18} />
              </Link>
              <Link className="button button-secondary" to="/products">
                {label('continueShopping')}
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
