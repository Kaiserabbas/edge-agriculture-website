import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'

const strengths = [
  {
    icon: 'shield',
    title: { en: 'Dubai-ready practices', ar: 'ممارسات مناسبة لدبي' },
    body: {
      en: 'Planting, irrigation, and maintenance choices are shaped around heat, water efficiency, and long-term care.',
      ar: 'اختيارات الزراعة والري والصيانة مبنية حول الحرارة وكفاءة المياه والعناية طويلة المدى.',
    },
  },
  {
    icon: 'handshake',
    title: { en: 'One contractor experience', ar: 'تجربة جهة واحدة' },
    body: {
      en: 'Customers can move from supplies to nursery sourcing to landscaping services without changing partners.',
      ar: 'يمكن للعملاء الانتقال من المستلزمات إلى نباتات المشتل ثم خدمات التنسيق مع جهة واحدة.',
    },
  },
  {
    icon: 'globe',
    title: { en: 'Bilingual communication', ar: 'تواصل ثنائي اللغة' },
    body: {
      en: 'English and Arabic content helps homeowners, contractors, and commercial clients find the right offer quickly.',
      ar: 'يساعد المحتوى بالإنجليزية والعربية أصحاب المنازل والمقاولين والعملاء التجاريين على الوصول بسرعة للعرض المناسب.',
    },
  },
]

export default function AboutPage() {
  const { label, text } = useLocale()

  usePageMeta(
    { en: 'About EDGE Agriculture', ar: 'عن EDGE Agriculture' },
    {
      en: 'EDGE Agriculture is positioned as a one-stop green solution for landscaping, irrigation, nursery plants, and agriculture supplies in Dubai.',
      ar: 'تتموضع EDGE Agriculture كحل أخضر متكامل للتنسيق والري ونباتات المشتل والمستلزمات الزراعية في دبي.',
    },
  )

  return (
    <>
      <PageHero
        eyebrow={{ en: 'About EDGE Agriculture', ar: 'عن EDGE Agriculture' }}
        title={{ en: 'A practical green partner for Dubai homes and businesses.', ar: 'شريك أخضر عملي لمنازل وشركات دبي.' }}
        body={{
          en: 'The website positions EDGE Agriculture as a reliable destination for supplies, plant stock, and complete outdoor transformations.',
          ar: 'يضع الموقع EDGE Agriculture كوجهة موثوقة للمستلزمات والمخزون النباتي والتحولات الخارجية المتكاملة.',
        }}
        image="/images/6.jpeg"
        ctaTo="/contact"
        ctaLabel={{ en: 'Visit or enquire', ar: 'زرنا أو استفسر' }}
      />

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionHeader
              eyebrow={{ en: 'Positioning', ar: 'التموضع' }}
              title={{ en: 'Supplies, services and nursery stock in one place', ar: 'مستلزمات وخدمات ومخزون مشتل في مكان واحد' }}
              body={{
                en: 'The report recommends a brand experience that blends e-commerce convenience with high-trust landscaping services. This site is structured around that exact mix.',
                ar: 'يوصي التقرير بتجربة علامة تجمع سهولة التجارة الإلكترونية مع خدمات تنسيق موثوقة. تم بناء الموقع حول هذا المزيج.',
              }}
            />
            <Link className="button button-primary" to="/services">
              {label('services')}
              <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength-card" key={text(item.title)}>
                <span className="icon-badge">
                  <Icon name={item.icon} />
                </span>
                <h3>{text(item.title)}</h3>
                <p>{text(item.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container timeline-grid">
          <div>
            <p className="eyebrow">{text({ en: 'Mission', ar: 'المهمة' })}</p>
            <h2>{text({ en: 'Make Dubai gardens easier to plan, build and maintain.', ar: 'جعل حدائق دبي أسهل في التخطيط والتنفيذ والعناية.' })}</h2>
          </div>
          <div className="check-panel">
            <p>
              {text({
                en: 'Grow greener with Edge Agriculture - premium gardening supplies and landscaping services in Dubai.',
                ar: 'مع Edge Agriculture، حديقتك تزدهر - أفضل مستلزمات الزراعة وخدمات تنسيق الحدائق في دبي.',
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
