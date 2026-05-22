import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('edge-cart')) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  const persist = (nextItems) => {
    setItems(nextItems)
    localStorage.setItem('edge-cart', JSON.stringify(nextItems))
  }

  const addItem = (item) => {
    const nextItems = items.some((cartItem) => cartItem.id === item.id)
      ? items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        )
      : [...items, { ...item, quantity: 1 }]
    persist(nextItems)
  }

  const updateQuantity = (id, quantity) => {
    const nextQuantity = Math.max(1, quantity)
    persist(items.map((item) => (item.id === id ? { ...item, quantity: nextQuantity } : item)))
  }

  const removeItem = (id) => {
    persist(items.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    persist([])
  }

  const value = useMemo(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0)

    return {
      items,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
