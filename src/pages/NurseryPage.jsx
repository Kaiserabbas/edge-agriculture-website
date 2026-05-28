import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CategoryChips from '../components/CategoryChips.jsx'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { nurseryCategories, plants } from '../data/siteContent.js'

export default function NurseryPage() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')
  const { label, text } = useLocale()
  const location = useLocation()

  usePageMeta(
    { en: 'Plant Nursery Inventory', ar: 'مخزون نباتات المشتل' },
    {
      en: 'Browse climbers, shrubs, groundcover, flowers, trees, palms, and indoor plants for Dubai gardens.',
      ar: 'تصفح المتسلقات والشجيرات والأغطية الأرضية والزهور والأشجار والنخيل والنباتات الداخلية لحدائق دبي.',
    },
  )

  const filteredPlants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return plants.filter((plant) => {
      const matchesCategory = active === 'all' || plant.category === active
      const searchText = `${text(plant.name)} ${plant.botanical} ${text(plant.care)}`.toLowerCase()
      return matchesCategory && (!normalizedQuery || searchText.includes(normalizedQuery))
    })
  }, [active, query, text])

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Nursery inventory', ar: 'مخزون المشتل' }}
        title={{ en: 'Plants, palms and planters ready for Dubai gardens.', ar: 'نباتات ونخيل وأحواض جاهزة لحدائق دبي.' }}
        body={{
          en: 'A browsable stock structure for climbers, shrubs, groundcover, flowers, trees, palms, and indoor plants.',
          ar: 'هيكل مخزون قابل للتصفح للمتسلقات والشجيرات والأغطية الأرضية والزهور والأشجار والنخيل والنباتات الداخلية.',
        }}
        image="/images/5.jpeg"
        ctaTo="/contact"
        ctaLabel={{ en: 'Ask about stock', ar: 'اسأل عن المخزون' }}
      />

      {/* Nursery Tabs Navigation */}
      <div className="nursery-nav-container">
        <div className="container">
          <nav className="nursery-tabs" aria-label="Nursery sections">
            <Link 
              to="/nursery" 
              className={`nursery-tab ${location.pathname === '/nursery' ? 'is-active' : ''}`}
            >
              {label('search')} {label('inventory') || 'Plant Inventory'}
            </Link>
            <Link 
              to="/nursery/planters-pots" 
              className={`nursery-tab ${location.pathname === '/nursery/planters-pots' ? 'is-active' : ''}`}
            >
              {label('plantersAndPots') || 'Planters & Pots'}
            </Link>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Plant finder', ar: 'البحث عن النباتات' }}
            title={{ en: 'Filter nursery stock', ar: 'فلتر مخزون المشتل' }}
          />
          <div className="catalog-controls">
            <CategoryChips
              items={nurseryCategories}
              active={active}
              onChange={setActive}
              getLabel={(item) => item.label}
            />
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
            {filteredPlants.map((plant) => (
              <ProductCard product={plant} type="plant" key={plant.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
