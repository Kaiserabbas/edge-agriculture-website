import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { blogPosts } from '../data/siteContent.js'

export default function BlogPage() {
  const { label, text } = useLocale()

  usePageMeta(
    { en: 'Gardening Resources', ar: 'موارد العناية بالحدائق' },
    {
      en: 'Bilingual gardening tips for Dubai irrigation, fertilizers, plant selection, and seasonal care.',
      ar: 'نصائح ثنائية اللغة لحدائق دبي حول الري والأسمدة واختيار النباتات والعناية الموسمية.',
    },
  )

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Blog and resources', ar: 'المدونة والموارد' }}
        title={{ en: 'SEO-ready advice for gardeners and villa owners.', ar: 'نصائح جاهزة لمحركات البحث لأصحاب الحدائق والفلل.' }}
        body={{
          en: 'Use this section for bilingual articles targeting landscaping Dubai, irrigation systems UAE, plant nursery Dubai, and Arabic search terms.',
          ar: 'استخدم هذا القسم لمقالات ثنائية اللغة تستهدف تنسيق حدائق دبي وأنظمة الري ومشاتل دبي وكلمات البحث العربية.',
        }}
        image="/images/5.jpeg"
        ctaTo="/faq"
        ctaLabel={{ en: 'Browse FAQs', ar: 'تصفح الأسئلة' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Latest articles', ar: 'أحدث المقالات' }}
            title={{ en: 'Seasonal guidance and care notes', ar: 'إرشادات موسمية وملاحظات عناية' }}
          />
          <div className="blog-list">
            {blogPosts.map((post) => (
              <article className="blog-row" key={post.slug}>
                <img src={post.image} alt={text(post.title)} loading="lazy" />
                <div>
                  <time dateTime={post.date}>{post.date}</time>
                  <h2>{text(post.title)}</h2>
                  <p>{text(post.excerpt)}</p>
                  <span className="card-link">{label('readMore')}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
