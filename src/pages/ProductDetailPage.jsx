import { Link, Navigate, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { useCart } from '../context/CartContext.jsx'
import { useLocale } from '../context/LocaleContext.jsx'
import { productCategories, products } from '../data/siteContent.js'
import { formatCurrency } from '../utils.js'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const { addItem } = useCart()
  const { label, text } = useLocale()

  usePageMeta(
    product?.name || { en: 'Product Catalog', ar: 'كتالوج المنتجات' },
    product?.description || {
      en: 'EDGE Agriculture product catalog.',
      ar: 'كتالوج منتجات EDGE Agriculture.',
    },
  )

  if (!product) return <Navigate to="/products" replace />

  const category = productCategories.find((item) => item.slug === product.category)
  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <section className="section detail-product">
        <div className="container product-detail-grid">
          <div className="product-detail-image">
            <img src={product.image} alt={text(product.name)} />
          </div>
          <div className="product-detail-panel">
            <Link className="breadcrumb-link" to={`/products/${product.category}`}>
              {category ? text(category.title) : label('products')}
            </Link>
            <h1>{text(product.name)}</h1>
            <p>{text(product.description)}</p>
            <strong className="detail-price">{formatCurrency(product.price)}</strong>
            <ul className="check-list">
              {product.specs.map((spec) => (
                <li key={text(spec)}>
                  <Icon name="check" size={18} />
                  {text(spec)}
                </li>
              ))}
            </ul>
            <button
              className="button button-primary"
              type="button"
              onClick={() =>
                addItem({
                  id: `product-${product.id}`,
                  sourceId: product.id,
                  type: 'product',
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  category: product.category,
                })
              }
            >
              {label('addToCart')}
              <Icon name="shoppingCart" size={18} />
            </button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tint">
          <div className="container">
            <h2>{text({ en: 'Related products', ar: 'منتجات ذات صلة' })}</h2>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
