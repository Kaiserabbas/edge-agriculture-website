import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import {
  blogPosts,
  hero,
  plants,
  portfolioProjects,
  productCategories,
  products,
  services,
} from '../data/siteContent.js'

export default function HomePage() {
  const { label, text } = useLocale()

  usePageMeta(
    { en: 'Irrigation, Landscaping & Nursery in Dubai', ar: 'ري وحدائق ومشتل في دبي' },
    {
      en: 'EDGE Agriculture offers irrigation tools, fertilizers, seeds, nursery plants, and complete villa landscaping services in Dubai.',
      ar: 'تقدم EDGE Agriculture معدات ري وأسمدة وبذور ونباتات مشتل وخدمات تنسيق حدائق فلل متكاملة في دبي.',
    },
  )

  return (
    <>
      <section className="home-hero">
        <div className="hero-background">
          <img src={hero.image} alt="" loading="eager" />
        </div>
        <div className="container hero-content">
          <p className="eyebrow">{text(hero.eyebrow)}</p>
          <h1>{text(hero.title)}</h1>
          <p>{text(hero.subtitle)}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              {label('freeConsultation')}
              <Icon name="arrowRight" size={18} />
            </Link>
            <Link className="button button-light" to="/products">
              {label('shopNow')}
              <Icon name="shoppingBag" size={18} />
            </Link>
          </div>
          <div className="hero-metrics" aria-label="EDGE Agriculture highlights">
            {hero.metrics.map((metric) => (
              <div key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{text(metric.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Design, build, supply', ar: 'تصميم وتنفيذ وتوريد' }}
            title={{ en: 'A one-stop green solution', ar: 'حل أخضر متكامل' }}
            body={{
              en: 'Everything the report recommended: services for villas and commercial spaces, a shop-ready catalog, and a nursery inventory built for bilingual SEO.',
              ar: 'كل ما أوصى به التقرير: خدمات للفلل والمساحات التجارية، كتالوج قابل للتسوق، ومخزون مشتل يدعم تحسين محركات البحث باللغتين.',
            }}
            actionTo="/services"
            actionLabel={{ en: 'Explore services', ar: 'استكشف الخدمات' }}
          />
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Shop categories', ar: 'أقسام المتجر' }}
            title={{ en: 'Irrigation, fertilizers, seeds and tools', ar: 'ري وأسمدة وبذور وأدوات' }}
            body={{
              en: 'Catalog pages are structured for product descriptions, pricing, add-to-cart actions, and future API or CMS integration.',
              ar: 'صفحات الكتالوج مجهزة للوصف والأسعار والإضافة إلى السلة والتكامل لاحقا مع واجهة برمجة أو نظام إدارة محتوى.',
            }}
            actionTo="/products"
            actionLabel={{ en: 'Open catalog', ar: 'افتح الكتالوج' }}
          />
          <div className="category-grid">
            {productCategories.map((category) => (
              <Link className="category-tile" to={`/products/${category.slug}`} key={category.slug}>
                <span className="icon-badge">
                  <Icon name={category.icon} />
                </span>
                <h3>{text(category.title)}</h3>
                <p>{text(category.summary)}</p>
              </Link>
            ))}
          </div>
          <div className="product-grid product-grid--featured">
            {products.slice(0, 3).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">{text({ en: 'Nursery inventory', ar: 'مخزون المشتل' })}</p>
            <h2>{text({ en: 'Plants selected for Dubai climate', ar: 'نباتات مختارة لمناخ دبي' })}</h2>
            <p className="section-lede">
              {text({
                en: 'Climbers, shrubs, groundcover, flowers, trees, palms, planters, soils, and indoor plants can be filtered by category.',
                ar: 'متسلقات وشجيرات وأغطية أرضية وزهور وأشجار ونخيل وأحواض وتربة ونباتات داخلية مع فلترة حسب القسم.',
              })}
            </p>
            <Link className="button button-secondary" to="/nursery">
              {label('viewAll')}
              <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <div className="mini-product-row">
            {plants.slice(0, 2).map((plant) => (
              <ProductCard product={plant} type="plant" key={plant.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Portfolio', ar: 'الأعمال' }}
            title={{ en: 'Project styles for villas, pools and commercial entries', ar: 'أفكار للفلل والمسابح والمداخل التجارية' }}
            body={{
              en: 'Use this gallery structure later for real before-and-after project photography and bilingual captions.',
              ar: 'يمكن استخدام هذا المعرض لاحقا لصور المشاريع الحقيقية قبل وبعد مع تعليقات باللغتين.',
            }}
            actionTo="/portfolio"
            actionLabel={{ en: 'View gallery', ar: 'عرض المعرض' }}
          />
          <div className="portfolio-strip">
            {portfolioProjects.map((project) => (
              <Link to="/portfolio" className="portfolio-card" key={project.id}>
                <img src={project.image} alt={text(project.title)} loading="lazy" />
                <div>
                  <span>{text(project.category)}</span>
                  <h3>{text(project.title)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Resources', ar: 'الموارد' }}
            title={{ en: 'Gardening advice for UAE conditions', ar: 'نصائح زراعية لظروف الإمارات' }}
            body={{
              en: 'Blog content is ready for SEO-led articles around irrigation, planting, fertilizers, and seasonal care.',
              ar: 'قسم المدونة جاهز لمقالات تحسين محركات البحث حول الري والزراعة والأسمدة والعناية الموسمية.',
            }}
            actionTo="/blog"
            actionLabel={{ en: 'Read articles', ar: 'اقرأ المقالات' }}
          />
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <img src={post.image} alt={text(post.title)} loading="lazy" />
                <div>
                  <time dateTime={post.date}>{post.date}</time>
                  <h3>{text(post.title)}</h3>
                  <p>{text(post.excerpt)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-content">
          <div>
            <p className="eyebrow">{text({ en: 'Ready to plan?', ar: 'جاهز للتخطيط؟' })}</p>
            <h2>{text({ en: 'Transform your garden today.', ar: 'حوّل حديقتك اليوم.' })}</h2>
          </div>
          <Link className="button button-primary" to="/contact">
            {label('getQuote')}
            <Icon name="send" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
