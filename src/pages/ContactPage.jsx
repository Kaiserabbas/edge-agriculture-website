import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { contactInfo, services } from '../data/siteContent.js'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { label, text } = useLocale()

  usePageMeta(
    { en: 'Contact EDGE Agriculture', ar: 'اتصل ب EDGE Agriculture' },
    {
      en: 'Request a landscaping quote, ask about product stock, or contact EDGE Agriculture in Al Barsha, Dubai.',
      ar: 'اطلب عرض تنسيق حدائق أو اسأل عن مخزون المنتجات أو تواصل مع EDGE Agriculture في البرشاء، دبي.',
    },
  )

  const submitForm = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Contact', ar: 'اتصل بنا' }}
        title={{ en: 'Request a quote, product, or nursery visit.', ar: 'اطلب عرضا أو منتجا أو زيارة للمشتل.' }}
        body={{
          en: 'Use the form for villa landscaping, irrigation, product orders, nursery stock, or commercial enquiries.',
          ar: 'استخدم النموذج لتنسيق الفلل أو الري أو طلب المنتجات أو مخزون المشتل أو الاستفسارات التجارية.',
        }}
        image="/images/2.jpeg"
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              eyebrow={{ en: 'Enquiry form', ar: 'نموذج الاستفسار' }}
              title={{ en: 'Tell the team what you need', ar: 'أخبر الفريق بما تحتاجه' }}
            />
            <form className="contact-form" onSubmit={submitForm}>
              <label>
                <span>{text({ en: 'Name', ar: 'الاسم' })}</span>
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
                <span>{text({ en: 'Inquiry type', ar: 'نوع الطلب' })}</span>
                <select name="type" defaultValue="villa-landscaping">
                  {services.map((service) => (
                    <option value={service.slug} key={service.slug}>
                      {text(service.title)}
                    </option>
                  ))}
                  <option value="products">{label('products')}</option>
                  <option value="nursery">{label('nursery')}</option>
                </select>
              </label>
              <label className="span-2">
                <span>{text({ en: 'Message', ar: 'الرسالة' })}</span>
                <textarea required name="message" rows="5" />
              </label>
              <button className="button button-primary" type="submit">
                {label('sendMessage')}
                <Icon name="send" size={18} />
              </button>
              {sent && <p className="success-message">{label('formSuccess')}</p>}
            </form>
          </div>

          <aside className="contact-panel">
            <div className="map-placeholder">
              <img
                src="/v-card-horizontal.jpeg"
                alt="EDGE Agriculture visiting card"
              />
            </div>
            <ul className="contact-stack">
              <li>
                <Icon name="phone" />
                <div>
                  <span>{text({ en: 'Mobile', ar: 'الهاتف المتحرك' })}</span>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <span>{text({ en: 'Landline', ar: 'الهاتف الثابت' })}</span>
                  <a href={`tel:${contactInfo.landline}`}>{contactInfo.landline}</a>
                </div>
              </li>
              <li>
                <Icon name="mapPin" />
                <div>
                  <span>{text({ en: 'Location', ar: 'الموقع' })}</span>
                  <p>{text(contactInfo.address)}</p>
                </div>
              </li>
              {contactInfo.contacts.map((person) => (
                <li key={person.phone}>
                  <Icon name="phone" />
                  <div>
                    <span>{person.name}</span>
                    <a href={`tel:${person.phone}`}>{person.phone}</a>
                  </div>
                </li>
              ))}
              <li>
                <Icon name="shield" />
                <div>
                  <span>{text({ en: 'Working hours', ar: 'ساعات العمل' })}</span>
                  <p>{text(contactInfo.hours)}</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
