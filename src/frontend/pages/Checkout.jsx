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
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some delicious pies before checking out!</p>
        <Link
          to="/"
          className="inline-block bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
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
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              {cartItems.map((item) => (
                <div key={item.pieId} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} <span className="text-gray-400">× {item.quantity}</span>
                  </span>
                  <span className="text-gray-900 font-medium">
                    ${(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-teal-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/cart"
              className="block text-center text-sm text-teal-600 hover:text-teal-700 mt-4"
            >
              Edit Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
