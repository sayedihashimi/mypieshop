import { createContext, useContext, useState, useEffect } from 'react'
import { loadCart, saveCart } from '../utils/cartStorage'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCart()
    if (savedCart) {
      setCartItems(savedCart)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCart(cartItems)
  }, [cartItems])

  const addToCart = (pie) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.pieId === pie.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.pieId === pie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, {
        pieId: pie.id,
        name: pie.name,
        price: pie.price,
        quantity: 1,
        imageFilename: pie.imageFilename
      }]
    })
  }

  const removeFromCart = (pieId) => {
    setCartItems(prevItems => prevItems.filter(item => item.pieId !== pieId))
  }

  const updateQuantity = (pieId, quantity) => {
    if (quantity < 1) {
      removeFromCart(pieId)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.pieId === pieId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''))
      return total + (price * item.quantity)
    }, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
