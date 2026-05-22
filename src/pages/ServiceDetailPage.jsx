import { Link, Navigate, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { services } from '../data/siteContent.js'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  const { label, text } = useLocale()

  usePageMeta(
    service?.title || { en: 'Landscaping Services', ar: 'خدمات تنسيق الحدائق' },
    service?.summary || {
      en: 'EDGE Agriculture landscaping services in Dubai.',
      ar: 'خدمات تنسيق الحدائق من EDGE Agriculture في دبي.',
    },
  )

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section className="detail-hero">
        <div className="container detail-hero__grid">
          <div>
            <p className="eyebrow">{label('services')}</p>
            <h1>{text(service.title)}</h1>
            <p>{text(service.detail)}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                {label('requestQuote')}
                <Icon name="arrowRight" size={18} />
              </Link>
              <Link className="button button-secondary" to="/portfolio">
                {label('portfolio')}
              </Link>
            </div>
          </div>
          <img src={service.image} alt={text(service.title)} />
        </div>
      </section>

      <section className="section">
        <div className="container detail-columns">
          <div>
            <SectionHeader
              eyebrow={{ en: 'Included', ar: 'يشمل' }}
              title={{ en: 'What the service covers', ar: 'ما تغطيه الخدمة' }}
            />
            <ul className="check-list">
              {service.features.map((feature) => (
                <li key={text(feature)}>
                  <Icon name="check" size={18} />
                  {text(feature)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow={{ en: 'Process', ar: 'الخطوات' }}
              title={{ en: 'A clear path from survey to aftercare', ar: 'مسار واضح من المعاينة إلى العناية' }}
            />
            <ol className="process-list">
              {service.process.map((step, index) => (
                <li key={text(step)}>
                  <span>{index + 1}</span>
                  {text(step)}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Related services', ar: 'خدمات ذات صلة' }}
            title={{ en: 'Complete the outdoor plan', ar: 'أكمل خطة المساحة الخارجية' }}
          />
          <div className="service-grid service-grid--compact">
            {related.map((item) => (
              <ServiceCard service={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
