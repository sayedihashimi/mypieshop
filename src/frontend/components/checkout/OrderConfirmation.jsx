import { Link } from 'react-router-dom'

function OrderConfirmation({ order }) {
  const formatPrice = (amount) => {
    return `$${amount.toFixed(2)}`
  }

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      {/* Success Icon with Animation */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Thank you for your order, <span className="font-semibold text-primary-600">{order.customerInfo.name}</span>!
      </p>

      {/* Confirmation Number */}
      <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-xl p-8 mb-8 shadow-sm">
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium">Confirmation Number</p>
        <p className="text-2xl md:text-3xl font-mono font-bold text-primary-600 break-all">{order.orderId}</p>
        <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
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
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 text-left shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Order Summary
        </h2>
        
        <div className="divide-y divide-gray-100">
          {order.items.map((item) => (
            <div key={item.pieId} className="py-4 flex items-center gap-4 first:pt-0 last:pb-0">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src={`/src/frontend/assets/images/pies/${item.imageFilename}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-gray-900">
                {formatPrice(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-primary-600">{order.total}</span>
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 text-left shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Delivery Address
        </h2>
        <div className="text-gray-700 space-y-1">
          <p className="font-semibold">{order.customerInfo.name}</p>
          <p>{order.customerInfo.address.street}</p>
          <p>
            {order.customerInfo.address.city}, {order.customerInfo.address.state} {order.customerInfo.address.zip}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 space-y-1">
          <p className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {order.customerInfo.email}
          </p>
          <p className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {order.customerInfo.phone}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 rounded-lg p-4">
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p>
            We'll send a confirmation email to <span className="font-semibold">{order.customerInfo.email}</span>
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary-500 text-white py-4 px-10 rounded-xl font-bold hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary-200 hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default OrderConfirmation
