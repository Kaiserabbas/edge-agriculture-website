import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { faqs } from '../data/siteContent.js'

export default function FaqPage() {
  const { text } = useLocale()

  usePageMeta(
    { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
    {
      en: 'Answers about EDGE Agriculture landscaping services, maintenance, e-commerce catalog, Arabic content, and service areas.',
      ar: 'إجابات حول خدمات تنسيق الحدائق والصيانة والكتالوج الإلكتروني والمحتوى العربي ومناطق الخدمة.',
    },
  )

  return (
    <>
      <PageHero
        eyebrow={{ en: 'FAQs', ar: 'الأسئلة الشائعة' }}
        title={{ en: 'Quick answers before you enquire.', ar: 'إجابات سريعة قبل التواصل.' }}
        body={{
          en: 'These questions are ready for FAQ schema and can be expanded with delivery, warranty, checkout, and installation policies.',
          ar: 'هذه الأسئلة جاهزة لترميز FAQ ويمكن توسيعها بسياسات التوصيل والضمان والدفع والتركيب.',
        }}
        image="/images/12.jpeg"
        ctaTo="/contact"
        ctaLabel={{ en: 'Ask a question', ar: 'اسأل سؤالا' }}
      />

      <section className="section">
        <div className="container faq-layout">
          <SectionHeader
            eyebrow={{ en: 'Support', ar: 'الدعم' }}
            title={{ en: 'Ordering, service and maintenance', ar: 'الطلبات والخدمات والصيانة' }}
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={text(faq.question)} open={index === 0}>
                <summary>{text(faq.question)}</summary>
                <p>{text(faq.answer)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
