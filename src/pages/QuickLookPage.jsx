import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useLocale } from '../context/LocaleContext.jsx'

export default function QuickLookPage() {
  const { text } = useLocale()
  const [zoomImg, setZoomImg] = useState(null)

  usePageMeta(
    { en: 'Business Card & Profile | EDGE Agriculture Dubai', ar: 'بطاقة العمل والملف التعريفي | EDGE Agriculture دبي' },
    {
      en: 'EDGE Agriculture Dubai - Business Card, Profile, and Quick Look QR Code.',
      ar: 'EDGE Agriculture دبي - بطاقة العمل، الملف التعريفي، ورمز QR للنظرة السريعة.',
    }
  )

  return (
    <div style={{
      background: 'var(--sand)',
      minHeight: '80vh',
      padding: '32px 16px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Top Minimal Bar */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '14px 20px',
          border: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 12px rgba(15, 57, 43, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/logo-horizontal.jpeg" alt="EDGE Agriculture" style={{ height: '36px', width: 'auto' }} />
            <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--green-strong)', textTransform: 'uppercase' }}>
              EDGE Agriculture Dubai
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href="tel:+971502424666"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#065f46',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
              title="Call"
            >
              <Icon name="phone" size={17} />
            </a>
            <a
              href="https://wa.me/971502424666"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#22c55e',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
              title="WhatsApp"
            >
              <Icon name="messageSquare" size={17} />
            </a>
          </div>
        </div>

        {/* FIRST: Business Card */}
        <section>
          <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--green-strong)', marginBottom: '8px', paddingLeft: '4px', letterSpacing: '0.05em' }}>
            💳 {text({ en: 'First: Business Card', ar: 'أولاً: بطاقة العمل' })}
          </div>
          <div
            onClick={() => setZoomImg('/images/edge-agriculture-card.png')}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '10px',
              border: '1px solid var(--line)',
              boxShadow: '0 6px 20px rgba(15, 57, 43, 0.06)',
              cursor: 'zoom-in'
            }}
          >
            <img
              src="/images/edge-agriculture-card.png"
              alt="EDGE Agriculture Business Card"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
            />
          </div>
        </section>

        {/* SECOND: Profile */}
        <section>
          <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--green-strong)', marginBottom: '8px', paddingLeft: '4px', letterSpacing: '0.05em' }}>
            📄 {text({ en: 'Second: Business Profile', ar: 'ثانياً: الملف التعريفي' })}
          </div>
          <div
            onClick={() => setZoomImg('/images/business-profile-brochure.jpg')}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '10px',
              border: '1px solid var(--line)',
              boxShadow: '0 6px 20px rgba(15, 57, 43, 0.06)',
              cursor: 'zoom-in'
            }}
          >
            <img
              src="/images/business-profile-brochure.jpg"
              alt="EDGE Agriculture Business Profile"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
            />
          </div>
        </section>

        {/* THIRD: A Button for Website */}
        <section>
          <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--green-strong)', marginBottom: '8px', paddingLeft: '4px', letterSpacing: '0.05em' }}>
            🌐 {text({ en: 'Third: Official Website', ar: 'ثالثاً: الموقع الرسمي' })}
          </div>
          <a
            href="https://edgeagriculture.netlify.app/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              background: 'linear-gradient(135deg, #0f392b 0%, #16552d 100%)',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 700,
              padding: '18px 24px',
              borderRadius: '16px',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(15, 57, 43, 0.25)',
              border: '1px solid #2d7a4d',
              textAlign: 'center'
            }}
          >
            <Icon name="globe" size={20} />
            {text({ en: 'Visit Website — edgeagriculture.netlify.app', ar: 'زيارة الموقع — edgeagriculture.netlify.app' })}
          </a>
        </section>

        {/* Contact Actions Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <a
            href="tel:+971502424666"
            className="button button-secondary"
            style={{ justifyContent: 'center', padding: '14px', fontSize: '15px' }}
          >
            📞 {text({ en: 'Call Naseer: +971 50 2424666', ar: 'اتصال: +971 50 2424666' })}
          </a>
          <a
            href="https://wa.me/971502424666"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            style={{
              background: '#22c55e',
              color: '#ffffff',
              justifyContent: 'center',
              padding: '14px',
              fontSize: '15px',
              borderRadius: 'var(--radius)'
            }}
          >
            💬 {text({ en: 'WhatsApp Inquiry', ar: 'محادثة عبر واتساب' })}
          </a>
        </div>

        {/* QR Code Section */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '24px 20px',
          border: '1px solid var(--line)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 6px 20px rgba(15, 57, 43, 0.06)'
        }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green-strong)' }}>
            📱 {text({ en: 'Customer Quick Look QR Code', ar: 'رمز الاستجابة السريعة (QR)' })}
          </div>
          <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>
            {text({ en: 'Scan with any phone camera for instant look', ar: 'امسح الرمز بكاميرا أي هاتف للنظرة السريعة' })}
          </p>
          <img
            src="/images/edge-qr-code.svg"
            alt="EDGE Agriculture QR Code"
            style={{ width: '180px', height: '180px', display: 'block', padding: '8px', border: '1px solid #e2e8e5', borderRadius: '12px' }}
          />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/images/edge-qr-code.png" download="EDGE-Agriculture-QR.png" className="button button-secondary" style={{ fontSize: '12px', padding: '8px 14px' }}>
              📥 {text({ en: 'Download QR', ar: 'تحميل الرمز' })}
            </a>
            <a href="/edge-agriculture.vcf" download className="button button-secondary" style={{ fontSize: '12px', padding: '8px 14px' }}>
              📇 {text({ en: 'Save Contact', ar: 'حفظ جهة الاتصال' })}
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Zoom */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <button
            type="button"
            onClick={() => setZoomImg(null)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              color: '#ffffff',
              background: 'rgba(255,255,255,0.25)',
              border: 'none',
              fontSize: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
          <img
            src={zoomImg}
            alt="Zoom view"
            style={{ maxWidth: '96vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  )
}
