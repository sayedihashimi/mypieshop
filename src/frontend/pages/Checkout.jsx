import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderConfirmation from '../components/checkout/OrderConfirmation'

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [orderComplete, setOrderComplete] = useState(false)
  const [order, setOrder] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Generate a confirmation number
  const generateConfirmationNumber = () => {
    return `SS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  }

  const handleSubmit = (formData) => {
    setIsSubmitting(true)

    // Simulate processing delay
    setTimeout(() => {
      const total = getCartTotal()
      const newOrder = {
        orderId: generateConfirmationNumber(),
        items: [...cartItems],
        total: `$${total.toFixed(2)}`,
        customerInfo: formData.customerInfo,
        timestamp: new Date().toISOString()
      }

      setOrder(newOrder)
      clearCart()
      setOrderComplete(true)
      setIsSubmitting(false)
    }, 1000)
  }

  // Redirect to home if cart is empty and no order was placed
  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">Add some delicious pies to your cart before checking out!</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary-200"
        >
          Browse Pies
        </Link>
      </div>
    )
  }

  // Show order confirmation
  if (orderComplete && order) {
    return <OrderConfirmation order={order} />
  }

  // Show checkout form
  const total = getCartTotal()

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center gap-2 text-gray-500">
          <li><Link to="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
          <li><span className="text-gray-300">/</span></li>
          <li><Link to="/cart" className="hover:text-primary-600 transition-colors">Cart</Link></li>
          <li><span className="text-gray-300">/</span></li>
          <li className="text-primary-600 font-medium">Checkout</li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 p-6 sticky top-24 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.pieId} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={`/src/frontend/assets/images/pies/${item.imageFilename}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-semibold text-primary-600">
                      ${(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-primary-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="text-primary-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2">
                <span>Total</span>
                <span className="text-primary-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 text-sm text-primary-600 hover:text-primary-700 mt-6 font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
