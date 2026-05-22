import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useCart } from '../context/CartContext.jsx'
import { useLocale } from '../context/LocaleContext.jsx'
import { formatCurrency } from '../utils.js'

export default function CheckoutPage() {
  const [sent, setSent] = useState(false)
  const { clearCart, items, subtotal } = useCart()
  const { label, text } = useLocale()

  usePageMeta(
    { en: 'Checkout', ar: 'الدفع' },
    {
      en: 'Checkout-ready enquiry flow for EDGE Agriculture e-commerce products and service notes.',
      ar: 'مسار طلب جاهز للدفع لمنتجات EDGE Agriculture وملاحظات الخدمة.',
    },
  )

  const submitCheckout = (event) => {
    event.preventDefault()
    setSent(true)
    clearCart()
    event.currentTarget.reset()
  }

  return (
    <section className="section checkout-page">
      <div className="container">
        <SectionHeader
          eyebrow={{ en: 'Checkout', ar: 'الدفع' }}
          title={{ en: 'Confirm details for quote or delivery', ar: 'أكد البيانات للتسعير أو التوصيل' }}
        />

        {items.length === 0 && !sent ? (
          <div className="empty-state">
            <Icon name="shoppingBag" size={34} />
            <p>{label('emptyCart')}</p>
            <Link className="button button-primary" to="/products">
              {label('shopNow')}
            </Link>
          </div>
        ) : (
          <div className="checkout-grid">
            <form className="contact-form" onSubmit={submitCheckout}>
              <label>
                <span>{text({ en: 'Full name', ar: 'الاسم الكامل' })}</span>
                <input required name="name" type="text" autoComplete="name" />
              </label>
              <label>
                <span>{text({ en: 'Email', ar: 'البريد الإلكتروني' })}</span>
                <input required name="email" type="email" autoComplete="email" />
              </label>
              <label>
                <span>{text({ en: 'Phone', ar: 'الهاتف' })}</span>
                <input required name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                <span>{text({ en: 'Delivery area', ar: 'منطقة التوصيل' })}</span>
                <input required name="area" type="text" placeholder="Al Barsha" />
              </label>
              <label className="span-2">
                <span>{text({ en: 'Address and notes', ar: 'العنوان والملاحظات' })}</span>
                <textarea required name="notes" rows="5" />
              </label>
              <button className="button button-primary" type="submit">
                {label('sendMessage')}
                <Icon name="send" size={18} />
              </button>
              {sent && <p className="success-message">{label('formSuccess')}</p>}
            </form>

            <aside className="summary-panel">
              <h2>{label('subtotal')}</h2>
              <strong>{formatCurrency(subtotal)}</strong>
              <p>
                {text({
                  en: 'Payment gateway, COD, and shipping rules can be connected in the next backend phase.',
                  ar: 'يمكن ربط بوابة الدفع والدفع عند الاستلام وقواعد الشحن في مرحلة الخلفية التالية.',
                })}
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
