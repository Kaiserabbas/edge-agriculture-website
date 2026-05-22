import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useLocale } from '../context/LocaleContext.jsx'
import { formatCurrency } from '../utils.js'
import Icon from './Icon.jsx'

export default function ProductCard({ product, type = 'product' }) {
  const { addItem } = useCart()
  const { label, text } = useLocale()
  const detailPath =
    type === 'plant' ? '/nursery' : `/products/${product.category}/${product.id}`

  return (
    <article className="product-card">
      <Link to={detailPath} className="product-card__image" aria-label={text(product.name)}>
        <img src={product.image} alt={text(product.name)} loading="lazy" />
        {product.tag && <span>{text(product.tag)}</span>}
      </Link>
      <div className="product-card__body">
        <div>
          <h3>{text(product.name)}</h3>
          <p>{text(product.description || product.care)}</p>
        </div>
        {product.botanical && <p className="botanical">{product.botanical}</p>}
        <div className="product-card__footer">
          <strong>{formatCurrency(product.price)}</strong>
          <button
            className="icon-button icon-button--filled"
            type="button"
            aria-label={label('addToCart')}
            onClick={() =>
              addItem({
                id: `${type}-${product.id}`,
                sourceId: product.id,
                type,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
              })
            }
          >
            <Icon name="shoppingCart" size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}
