import { Link } from 'react-router-dom'

function OrderConfirmation({ order }) {
  const formatPrice = (amount) => {
    return `$${amount.toFixed(2)}`
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your order, {order.customerInfo.name}!
      </p>

      {/* Confirmation Number */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <p className="text-sm text-gray-500 mb-1">Confirmation Number</p>
        <p className="text-2xl font-mono font-bold text-teal-600">{order.orderId}</p>
        <p className="text-sm text-gray-500 mt-2">
          {new Date(order.timestamp).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
        
        <div className="divide-y divide-gray-100">
          {order.items.map((item) => (
            <div key={item.pieId} className="py-3 flex justify-between">
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium text-gray-900">
                {formatPrice(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-teal-600">{order.total}</span>
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h2>
        <p className="text-gray-700">{order.customerInfo.name}</p>
        <p className="text-gray-700">{order.customerInfo.address.street}</p>
        <p className="text-gray-700">
          {order.customerInfo.address.city}, {order.customerInfo.address.state} {order.customerInfo.address.zip}
        </p>
        <p className="text-gray-500 mt-2">{order.customerInfo.email}</p>
        <p className="text-gray-500">{order.customerInfo.phone}</p>
      </div>

      {/* Call to Action */}
      <div className="space-y-4">
        <p className="text-gray-600">
          We'll send a confirmation email to <span className="font-medium">{order.customerInfo.email}</span>
        </p>
        <Link
          to="/"
          className="inline-block bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default OrderConfirmation
