import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'

export default function PlantersPotsPage() {
  const { text } = useLocale()
  const [selectedImage, setSelectedImage] = useState(null)

  usePageMeta(
    { en: 'Planters & Pots', ar: 'أصص وأحواض النباتات' },
    {
      en: 'Browse our beautiful collection of planters, pots, and indoor plants perfect for any space.',
      ar: 'اكتشف مجموعتنا الرائعة من الأصص والأحواض والنباتات الداخلية المثالية لأي مساحة.',
    },
  )

  // Generate image arrays for each section
  const potImages = Array.from({ length: 62 }, (_, i) => ({
    id: `pot-${i + 1}`,
    image: `/images/pots/${i + 1}.jpeg`,
  }))

  const indoorImages = Array.from({ length: 22 }, (_, i) => ({
    id: `indoor-${i + 1}`,
    image: `/images/indoor/${i + 1}.jpeg`,
  }))

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Planters & Pots', ar: 'أصص وأحواض النباتات' }}
        title={{ en: 'Discover our beautiful pot and planter collection.', ar: 'اكتشف مجموعتنا الجميلة من الأصص والأحواض.' }}
        body={{
          en: 'Premium pots, planters, and indoor plants to enhance any space.',
          ar: 'أصص وأحواض ونباتات داخلية مميزة لتحسين أي مساحة.',
        }}
        image="/images/pots/1.jpeg"
        ctaTo="/contact"
        ctaLabel={{ en: 'Get a quote', ar: 'اطلب عرض سعر' }}
      />

      {/* Pots Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Pots Collection', ar: 'مجموعة الأصص' }}
            title={{ en: 'Premium pots and planters', ar: 'أصص وأحواض مميزة' }}
          />
          <div className="pinterest-grid">
            {potImages.map((item) => (
              <button
                className="pinterest-item"
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                aria-label="View full image"
                type="button"
              >
                <img src={item.image} alt={`Pot ${item.id}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Plants Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={{ en: 'Indoor Plants', ar: 'النباتات الداخلية' }}
            title={{ en: 'Beautiful indoor plants for your home', ar: 'نباتات داخلية جميلة لمنزلك' }}
          />
          <div className="pinterest-grid">
            {indoorImages.map((item) => (
              <button
                className="pinterest-item"
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                aria-label="View full image"
                type="button"
              >
                <img src={item.image} alt={`Indoor plant ${item.id}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" />
            <button
              className="image-modal-close"
              onClick={closeModal}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
