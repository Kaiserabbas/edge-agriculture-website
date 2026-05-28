import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NurseryPage from './pages/NurseryPage.jsx'
import PlantersPotsPage from './pages/PlantersPotsPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import { organizationSchema } from './data/siteContent.js'
import { useLocale } from './context/LocaleContext.jsx'

export default function App() {
  const { direction, locale } = useLocale()
  const location = useLocation()

  return (
    <div className="site-shell" dir={direction} lang={locale}>
      <ScrollToTop pathname={location.pathname} />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/products/:category/:productId" element={<ProductDetailPage />} />
          <Route path="/nursery" element={<NurseryPage />} />
          <Route path="/nursery/planters-pots" element={<PlantersPotsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </div>
  )
}
