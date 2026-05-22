import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { services } from '../data/siteContent.js'

export default function ServicesPage() {
  usePageMeta(
    { en: 'Landscaping Services in Dubai', ar: 'خدمات تنسيق الحدائق في دبي' },
    {
      en: 'Villa landscaping, smart irrigation, pool surroundings, civil works, and nursery sourcing services in Dubai.',
      ar: 'تنسيق حدائق الفلل والري الذكي ومحيط المسابح والأعمال المدنية وتوريد نباتات المشتل في دبي.',
    },
  )

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Services', ar: 'الخدمات' }}
        title={{ en: 'Outdoor spaces designed around Dubai living.', ar: 'مساحات خارجية مصممة لحياة دبي.' }}
        body={{
          en: 'From consultation and design to installation and aftercare, EDGE Agriculture is positioned as a single contractor for green spaces.',
          ar: 'من الاستشارة والتصميم إلى التنفيذ والعناية اللاحقة، تقدم EDGE Agriculture جهة واحدة للمساحات الخضراء.',
        }}
        image="/images/8.jpeg"
        ctaTo="/contact"
        ctaLabel={{ en: 'Request a service quote', ar: 'اطلب عرض خدمة' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Core capabilities', ar: 'الخدمات الأساسية' }}
            title={{ en: 'Design, irrigation, civil works and plant sourcing', ar: 'تصميم وري وأعمال مدنية وتوريد نباتات' }}
            body={{
              en: 'Every service page includes process steps, benefits, and calls to action so visitors can move naturally from browsing to inquiry.',
              ar: 'كل صفحة خدمة تتضمن خطوات العمل والفوائد ودعوات الإجراء حتى ينتقل الزائر بسلاسة من التصفح إلى الطلب.',
            }}
          />
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
