import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { portfolioProjects } from '../data/siteContent.js'

export default function PortfolioPage() {
  const { text } = useLocale()

  usePageMeta(
    { en: 'Landscaping Portfolio', ar: 'معرض أعمال تنسيق الحدائق' },
    {
      en: 'Gallery structure for villa gardens, pool landscapes, and commercial softscape projects in Dubai.',
      ar: 'معرض منظم لحدائق الفلل ومساحات المسابح ومشاريع الزراعة التجارية في دبي.',
    },
  )

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Portfolio', ar: 'الأعمال' }}
        title={{ en: 'A gallery built for real project photography.', ar: 'معرض جاهز لصور المشاريع الحقيقية.' }}
        body={{
          en: 'Replace these placeholders with villa landscaping, pool, pergola, turf, and nursery delivery photos.',
          ar: 'استبدل هذه الصور بصور تنسيق الفلل والمسابح والبرجولات والعشب وتوريدات المشتل.',
        }}
        image="/images/14.jpeg"
        ctaTo="/contact"
        ctaLabel={{ en: 'Plan a project', ar: 'خطط مشروعك' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Project gallery', ar: 'معرض المشاريع' }}
            title={{ en: 'Residential, commercial and poolside work', ar: 'أعمال سكنية وتجارية وبجانب المسابح' }}
          />
          <div className="pinterest-grid">
            {portfolioProjects.map((project) => (
              <article className="gallery-item" key={project.id}>
                <img src={project.image} alt={text(project.title)} loading="lazy" />
                <div>
                  <span>{text(project.category)}</span>
                  <h3>{text(project.title)}</h3>
                  <p>{text(project.summary)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
