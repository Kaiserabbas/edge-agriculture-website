import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryChips from '../components/CategoryChips.jsx'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { productCategories, products } from '../data/siteContent.js'

export default function ProductsPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const { label, text } = useLocale()
  const active = category || 'all'

  usePageMeta(
    { en: 'Agriculture Products Catalog', ar: 'كتالوج المنتجات الزراعية' },
    {
      en: 'Shop irrigation systems, fertilizers, seeds, and garden tools for Dubai homes, nurseries, and landscaping projects.',
      ar: 'تسوق أنظمة الري والأسمدة والبذور وأدوات الحدائق لمنازل دبي والمشاتل ومشاريع التنسيق.',
    },
  )

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = active === 'all' || product.category === active
      const searchText = `${text(product.name)} ${text(product.description)} ${product.id}`.toLowerCase()
      return matchesCategory && (!normalizedQuery || searchText.includes(normalizedQuery))
    })
  }, [active, query, text])

  const onCategoryChange = (slug) => {
    navigate(slug === 'all' ? '/products' : `/products/${slug}`)
  }

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Online catalog', ar: 'الكتالوج الإلكتروني' }}
        title={{ en: 'Products for greener Dubai gardens.', ar: 'منتجات لحدائق دبي الأكثر خضرة.' }}
        body={{
          en: 'Browse irrigation systems, fertilizers, seeds, and tools with category filters and cart-ready product cards.',
          ar: 'تصفح أنظمة الري والأسمدة والبذور والأدوات مع فلاتر الأقسام وبطاقات منتجات جاهزة للسلة.',
        }}
        image="/images/9.jpeg"
        ctaTo="/cart"
        ctaLabel={{ en: 'Open cart', ar: 'افتح السلة' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Catalog', ar: 'الكتالوج' }}
            title={{ en: 'Filter by category or search by product', ar: 'فلتر حسب القسم أو ابحث عن منتج' }}
          />
          <div className="catalog-controls">
            <CategoryChips items={productCategories} active={active} onChange={onCategoryChange} />
            <label className="search-field">
              <Icon name="search" size={18} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={label('search')}
              />
            </label>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
