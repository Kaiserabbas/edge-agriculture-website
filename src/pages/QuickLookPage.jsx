import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'
import { contactInfo } from '../data/siteContent.js'

export default function QuickLookPage() {
  const { text } = useLocale()
  const [activeTab, setActiveTab] = useState('brochure')
  const [lightboxImg, setLightboxImg] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  usePageMeta(
    { en: 'Quick Look & Business Profile | EDGE Agriculture Dubai', ar: 'نظرة سريعة والملف التعريفي | EDGE Agriculture دبي' },
    {
      en: 'Scan the customer QR code and view the official EDGE Agriculture Dubai business profile brochure, landscaping services, smart irrigation, and nursery plants.',
      ar: 'امسح رمز الاستجابة السريعة واطلع على بروشور الملف التعريفي لشركة EDGE Agriculture في دبي، خدمات اللاندسكيب، الري الذكي، ونباتات المشتل.',
    }
  )

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const copyLink = () => {
    const url = 'https://edgeagriculture.netlify.app/'
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
      showToast(text({ en: 'Official website link copied to clipboard!', ar: 'تم نسخ رابط الموقع الرسمي بنجاح!' }))
    } else {
      prompt(text({ en: 'Copy this link:', ar: 'انسخ هذا الرابط:' }), url)
    }
  }

  const primaryContact = contactInfo.contacts[0] || { name: 'Muhammad Naseer', phone: '+971 50 2424666' }

  return (
    <div className="quick-look-page">
      {/* Hero Section */}
      <section className="section section--tight bg-mist" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ecfdf5',
              color: '#065f46',
              border: '1px solid #a7f3d0',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px'
            }}>
              🌿 {text({ en: 'Customer Quick Look & Digital Profile', ar: 'نظرة سريعة للعملاء والملف الرقمي' })}
            </span>

            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '14px', lineHeight: 1.15 }}>
              {text({
                en: 'Residential & Commercial Greening Specialists',
                ar: 'متخصصون في تخضير وتنسيق المشاريع السكنية والتجارية'
              })}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              {text({
                en: 'A one-stop green solution for Dubai landscaping, smart irrigation, nursery plants, pools & civil works, and garden supplies.',
                ar: 'حل أخضر متكامل لتنسيق حدائق دبي، شبكات الري الذكي، نباتات المشتل، المسابح والأعمال المدنية، ومستلزمات الحدائق.'
              })}
            </p>

            {/* Quick Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href="https://edgeagriculture.netlify.app/"
                className="button button-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '15px' }}
              >
                <Icon name="globe" size={18} />
                {text({ en: 'Visit Official Site (edgeagriculture.netlify.app)', ar: 'الموقع الرسمي (edgeagriculture.netlify.app)' })}
              </a>

              <a
                href={`https://wa.me/${primaryContact.phone.replace(/[^0-9]/g, '')}?text=Hello%20EDGE%20Agriculture%2C%20I%20saw%20your%20quick%20look%20brochure%20and%20would%20like%20to%20consult...`}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                style={{
                  background: '#22c55e',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  fontWeight: 600,
                  borderRadius: 'var(--radius)'
                }}
              >
                <Icon name="messageSquare" size={18} />
                {text({ en: `WhatsApp Naseer (${primaryContact.phone})`, ar: `واتساب مع نصير (${primaryContact.phone})` })}
              </a>

              <a
                href="/edge-agriculture.vcf"
                download
                className="button button-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon name="fileText" size={18} />
                {text({ en: 'Save Contact (vCard)', ar: 'حفظ جهة الاتصال' })}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            
            {/* Left Column: Visual Profiles & Services */}
            <div style={{ flex: '1 1 600px' }}>

              {/* Tab Selector */}
              <div style={{
                display: 'flex',
                gap: '8px',
                background: '#eef3ef',
                padding: '6px',
                borderRadius: '12px',
                marginBottom: '24px'
              }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('brochure')}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeTab === 'brochure' ? '#ffffff' : 'transparent',
                    color: activeTab === 'brochure' ? 'var(--green-strong)' : 'var(--muted)',
                    boxShadow: activeTab === 'brochure' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  📄 {text({ en: 'Full Brochure View', ar: 'عرض البروشور الكامل' })}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('card')}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeTab === 'card' ? '#ffffff' : 'transparent',
                    color: activeTab === 'card' ? 'var(--green-strong)' : 'var(--muted)',
                    boxShadow: activeTab === 'card' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  💳 {text({ en: 'Executive Card', ar: 'البطاقة التعريفية' })}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('services')}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeTab === 'services' ? '#ffffff' : 'transparent',
                    color: activeTab === 'services' ? 'var(--green-strong)' : 'var(--muted)',
                    boxShadow: activeTab === 'services' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  🛠️ {text({ en: 'Services & Pillars', ar: 'الخدمات والمميزات' })}
                </button>
              </div>

              {/* Tab 1: Full Brochure View */}
              {activeTab === 'brochure' && (
                <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '8px' }}>
                    {text({ en: 'Official Business Profile Brochure', ar: 'بروشور الملف التعريفي الرسمي' })}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '16px' }}>
                    {text({
                      en: 'Residential & commercial greening specialists brochure. Click on the image below to inspect in high-definition fullscreen.',
                      ar: 'بروشور المتخصصين في المساحات الخضراء السكنية والتجارية. انقر على الصورة لتكبيرها بوضوح فائق.'
                    })}
                  </p>

                  <div
                    onClick={() => setLightboxImg('/images/business-profile-brochure.jpg')}
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'zoom-in',
                      border: '1px solid var(--line)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                    }}
                  >
                    <img
                      src="/images/business-profile-brochure.jpg"
                      alt="EDGE Agriculture Business Profile Brochure"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(15, 57, 43, 0.88)',
                      color: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)'
                    }}>
                      🔍 {text({ en: 'Click to Enlarge', ar: 'انقر للتكبير' })}
                    </div>
                  </div>

                  <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href="/images/business-profile-brochure.jpg"
                      download="EDGE-Agriculture-Brochure.jpg"
                      className="button button-secondary"
                    >
                      📥 {text({ en: 'Download Brochure Image', ar: 'تحميل صورة البروشور' })}
                    </a>
                    <Link to="/portfolio" className="button button-primary">
                      {text({ en: 'Explore Online Portfolio', ar: 'استكشف معرض الأعمال' })}
                    </Link>
                  </div>
                </div>
              )}

              {/* Tab 2: Executive Card */}
              {activeTab === 'card' && (
                <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '8px' }}>
                    {text({ en: 'Executive Quick Look Flyer', ar: 'البطاقة التعريفية السريعة' })}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '16px' }}>
                    {text({
                      en: 'Direct overview of services, nursery plants, irrigation equipment, and Instagram handle.',
                      ar: 'ملخص مباشر للخدمات ونباتات المشتل ومعدات الري وحساب الإنستغرام.'
                    })}
                  </p>

                  <div
                    onClick={() => setLightboxImg('/images/edge-agriculture-card.png')}
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'zoom-in',
                      border: '1px solid var(--line)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                    }}
                  >
                    <img
                      src="/images/edge-agriculture-card.png"
                      alt="EDGE Agriculture Executive Card"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(15, 57, 43, 0.88)',
                      color: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)'
                    }}>
                      🔍 {text({ en: 'Click to Enlarge', ar: 'انقر للتكبير' })}
                    </div>
                  </div>

                  <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href="/images/edge-agriculture-card.png"
                      download="EDGE-Agriculture-Card.png"
                      className="button button-secondary"
                    >
                      📥 {text({ en: 'Download Card Image', ar: 'تحميل صورة البطاقة' })}
                    </a>
                    <a
                      href="https://instagram.com/edge_plants_nursery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                      style={{ background: '#ec4899', color: '#ffffff' }}
                    >
                      📸 {text({ en: 'Follow @EDGE_PLANTS_NURSERY', ar: 'متابعة الإنستغرام' })}
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 3: Services & Pillars */}
              {activeTab === 'services' && (
                <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '8px' }}>
                    {text({ en: 'Core Greening Services & Solutions', ar: 'خدمات وحلول التخضير الأساسية' })}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '20px' }}>
                    {text({
                      en: 'As highlighted in our official brochure, we provide turnkey solutions tailored for Dubai villas and commercial premises.',
                      ar: 'كما هو موضح في البروشور الرسمي، نقدم حلولا متكاملة مصممة خصيصا لفلل دبي والمباني التجارية.'
                    })}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px'
                  }}>
                    <div style={{ background: '#f8faf9', padding: '16px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                      <h4 style={{ color: 'var(--green-strong)', fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
                        🏡 {text({ en: 'Landscaping Services', ar: 'تنسيق الحدائق' })}
                      </h4>
                      <ul style={{ fontSize: '13px', color: 'var(--muted)', listStyle: 'none', padding: 0 }}>
                        <li>✓ Complete Villa Landscaping</li>
                        <li>✓ Softscape Design & Turf</li>
                        <li>✓ Turnkey Implementation</li>
                      </ul>
                    </div>

                    <div style={{ background: '#f8faf9', padding: '16px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                      <h4 style={{ color: 'var(--green-strong)', fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
                        💧 {text({ en: 'Irrigation Solutions', ar: 'حلول شبكات الري' })}
                      </h4>
                      <ul style={{ fontSize: '13px', color: 'var(--muted)', listStyle: 'none', padding: 0 }}>
                        <li>✓ Smart Automated Timers</li>
                        <li>✓ Water Efficiency Management</li>
                        <li>✓ Drip & Spray Maintenance</li>
                      </ul>
                    </div>

                    <div style={{ background: '#f8faf9', padding: '16px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                      <h4 style={{ color: 'var(--green-strong)', fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
                        🏊 {text({ en: 'Pools & Civil Works', ar: 'المسابح والأعمال المدنية' })}
                      </h4>
                      <ul style={{ fontSize: '13px', color: 'var(--muted)', listStyle: 'none', padding: 0 }}>
                        <li>✓ Custom Pools & Waterfalls</li>
                        <li>✓ Pergolas, Decks & Gazebos</li>
                        <li>✓ Hardscaping & Paving</li>
                      </ul>
                    </div>

                    <div style={{ background: '#f8faf9', padding: '16px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                      <h4 style={{ color: 'var(--green-strong)', fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>
                        🪴 {text({ en: 'Garden Supplies & Nursery', ar: 'المشتل ومستلزمات الحدائق' })}
                      </h4>
                      <ul style={{ fontSize: '13px', color: 'var(--muted)', listStyle: 'none', padding: 0 }}>
                        <li>✓ Indoor & Outdoor Plants</li>
                        <li>✓ Fertilizers, Soils & Seeds</li>
                        <li>✓ Planters, Pots & Tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 4-Step Process Card */}
              <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '8px' }}>
                  🔄 {text({ en: 'Our 4-Step Process', ar: 'منهجية العمل من 4 خطوات' })}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '12px',
                  marginTop: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ background: '#f8faf9', padding: '14px 10px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                    <div style={{ width: '28px', height: '28px', background: 'var(--green-strong)', color: '#fff', borderRadius: '50%', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px' }}>1</div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--ink)' }}>Consult</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Site & water check</div>
                  </div>

                  <div style={{ background: '#f8faf9', padding: '14px 10px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                    <div style={{ width: '28px', height: '28px', background: 'var(--green-strong)', color: '#fff', borderRadius: '50%', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px' }}>2</div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--ink)' }}>Design</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Plant & hardscape plan</div>
                  </div>

                  <div style={{ background: '#f8faf9', padding: '14px 10px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                    <div style={{ width: '28px', height: '28px', background: 'var(--green-strong)', color: '#fff', borderRadius: '50%', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px' }}>3</div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--ink)' }}>Build</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Precision installation</div>
                  </div>

                  <div style={{ background: '#f8faf9', padding: '14px 10px', borderRadius: '10px', border: '1px solid var(--line)' }}>
                    <div style={{ width: '28px', height: '28px', background: 'var(--green-strong)', color: '#fff', borderRadius: '50%', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px' }}>4</div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--ink)' }}>Maintain</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Long-term thriving care</div>
                  </div>
                </div>
              </div>

              {/* Project Highlights Card */}
              <div className="card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '8px' }}>
                  🏆 {text({ en: 'Signature Project Highlights', ar: 'أبرز مشاريعنا المنفذة' })}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                  <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600 }}>🌴 Villa Garden Transformation</span>
                  <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600 }}>🏢 Commercial Office Greenery</span>
                  <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600 }}>🏙️ Rooftop Oasis</span>
                  <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600 }}>🌺 Custom Residential Courtyard</span>
                  <span style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600 }}>🏢 Company Garden</span>
                </div>
              </div>

            </div>

            {/* Right Column: Customer QR Code & Direct Contacts */}
            <div style={{ width: '100%', maxWidth: '380px', margin: '0 auto' }}>

              {/* QR Code Quick Look Card */}
              <div className="card" style={{
                padding: '28px 20px',
                textAlign: 'center',
                border: '2px solid #a7f3d0',
                boxShadow: '0 8px 30px rgba(15, 57, 43, 0.08)',
                marginBottom: '24px'
              }}>
                <span style={{
                  display: 'inline-block',
                  background: '#ecfdf5',
                  color: '#065f46',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '10px'
                }}>
                  {text({ en: 'Instant Quick Look QR', ar: 'رمز الوصول السريع' })}
                </span>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '6px' }}>
                  {text({ en: 'Scan for Instant Access', ar: 'امسح للوصول الفوري' })}
                </h3>

                <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '14px' }}>
                  {text({
                    en: 'Point your camera to browse products, nursery plants & WhatsApp us directly.',
                    ar: 'وجّه الكاميرا لتصفح المنتجات ونباتات المشتل والتواصل عبر واتساب مباشرة.'
                  })}
                </p>

                <div style={{
                  background: '#ffffff',
                  padding: '14px',
                  borderRadius: '16px',
                  border: '1px solid #d1fae5',
                  display: 'inline-block',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}>
                  <img
                    src="/images/edge-qr-code.svg"
                    alt="EDGE Agriculture QR Code"
                    style={{ width: '190px', height: '190px', display: 'block', margin: '0 auto' }}
                  />
                </div>

                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--green-strong)',
                  background: '#f8faf9',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px dashed #cbd5e1',
                  marginBottom: '16px',
                  wordBreak: 'break-all'
                }}>
                  https://edgeagriculture.netlify.app/
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="https://edgeagriculture.netlify.app/"
                    className="button button-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    🚀 {text({ en: 'Open Website Link', ar: 'فتح رابط الموقع' })}
                  </a>
                  
                  <button
                    type="button"
                    onClick={copyLink}
                    className="button button-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    📋 {text({ en: 'Copy Link', ar: 'نسخ الرابط' })}
                  </button>

                  <a
                    href="/images/edge-qr-code.png"
                    download="EDGE-Agriculture-QR.png"
                    className="button button-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    📥 {text({ en: 'Save QR Image (PNG)', ar: 'حفظ صورة الرمز (PNG)' })}
                  </a>
                </div>
              </div>

              {/* Direct Inquiries & Contact Card */}
              <div className="card" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--green-strong)', marginBottom: '16px' }}>
                  📞 {text({ en: 'Direct Contact Details', ar: 'معلومات الاتصال المباشر' })}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <a
                    href={`tel:${primaryContact.phone}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#ecfdf5', color: '#065f46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="phone" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                        {text({ en: 'Direct Call (Naseer)', ar: 'اتصال مباشر (نصير)' })}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
                        {primaryContact.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${primaryContact.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="messageSquare" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                        {text({ en: 'WhatsApp Inquiry', ar: 'استفسار عبر واتساب' })}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
                        {primaryContact.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Al+Barsha+Dubai+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fef3c7', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="mapPin" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                        {text({ en: 'Location', ar: 'الموقع' })}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>
                        Al Barsha, AbdurRahman Mosque, Dubai
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/edge_plants_nursery"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fdf2f8', color: '#be185d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="instagram" size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                        {text({ en: 'Instagram Nursery', ar: 'إنستغرام المشتل' })}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>
                        @EDGE_PLANTS_NURSERY
                      </div>
                    </div>
                  </a>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <a
                    href="/edge-agriculture.vcf"
                    download
                    className="button button-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    📇 {text({ en: 'Save Contact (.vcf)', ar: 'حفظ جهة الاتصال (.vcf)' })}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              fontSize: '22px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
          <img
            src={lightboxImg}
            alt="Fullscreen preview"
            style={{ maxWidth: '95vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--green-strong)',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '999px',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          zIndex: 100000,
          border: '1px solid #34d399'
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  )
}
