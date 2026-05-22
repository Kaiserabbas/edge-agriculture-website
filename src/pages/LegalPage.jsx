import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'

const policies = [
  {
    title: { en: 'Privacy', ar: 'الخصوصية' },
    body: {
      en: 'Customer enquiries, contact details, cart contents, and service notes should be used only to respond, quote, deliver, and improve the EDGE Agriculture experience.',
      ar: 'تستخدم استفسارات العملاء وبيانات التواصل ومحتويات السلة وملاحظات الخدمة للرد والتسعير والتوصيل وتحسين تجربة EDGE Agriculture فقط.',
    },
  },
  {
    title: { en: 'E-commerce terms', ar: 'شروط التجارة الإلكترونية' },
    body: {
      en: 'Product prices, availability, delivery timing, installation requests, refunds, and warranty details should be confirmed before checkout is connected to a live payment gateway.',
      ar: 'يجب تأكيد أسعار المنتجات والتوفر ومواعيد التوصيل وطلبات التركيب والاسترجاع والضمان قبل ربط الدفع الحقيقي.',
    },
  },
  {
    title: { en: 'Security', ar: 'الأمان' },
    body: {
      en: 'Production deployment should use HTTPS, secure payment providers, form spam protection, dependency updates, and clear cookie consent where analytics are enabled.',
      ar: 'يجب أن يستخدم النشر النهائي HTTPS ومزودي دفع آمنين وحماية للنماذج وتحديثات اعتماد وموافقة ملفات تعريف الارتباط عند تفعيل التحليلات.',
    },
  },
]

export default function LegalPage() {
  const { text } = useLocale()

  usePageMeta(
    { en: 'Legal and Privacy', ar: 'القوانين والخصوصية' },
    {
      en: 'Legal, privacy, e-commerce, and security notes for EDGE Agriculture website deployment.',
      ar: 'ملاحظات قانونية وخصوصية وتجارة إلكترونية وأمان لنشر موقع EDGE Agriculture.',
    },
  )

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Legal', ar: 'القوانين' }}
        title={{ en: 'Privacy, terms and security readiness.', ar: 'الخصوصية والشروط والاستعداد الأمني.' }}
        body={{
          en: 'A practical legal page structure for the production site before live checkout and analytics are enabled.',
          ar: 'هيكل صفحة قانونية عملي للموقع النهائي قبل تفعيل الدفع والتحليلات.',
        }}
        image="/images/3.jpeg"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Policies', ar: 'السياسات' }}
            title={{ en: 'Ready to replace with final legal copy', ar: 'جاهزة للاستبدال بالنص القانوني النهائي' }}
          />
          <div className="policy-grid">
            {policies.map((policy) => (
              <article className="policy-card" key={text(policy.title)}>
                <h2>{text(policy.title)}</h2>
                <p>{text(policy.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
