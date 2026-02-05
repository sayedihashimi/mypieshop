import { useState } from 'react'

function CheckoutForm({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    billingZip: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    const requiredFields = [
      { key: 'name', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'street', label: 'Street Address' },
      { key: 'city', label: 'City' },
      { key: 'state', label: 'State' },
      { key: 'zip', label: 'ZIP Code' },
      { key: 'cardNumber', label: 'Card Number' },
      { key: 'expiration', label: 'Expiration Date' },
      { key: 'cvv', label: 'CVV' },
      { key: 'billingZip', label: 'Billing ZIP Code' }
    ]

    requiredFields.forEach(({ key, label }) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${label} is required`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({
        customerInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zip: formData.zip
          }
        }
      })
    }
  }

  const inputClass = (fieldName) => `
    w-full px-4 py-3 border rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    placeholder:text-gray-400
    ${errors[fieldName] ? 'border-red-400 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400'}
  `

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass('name')}
              placeholder="John Smith"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass('email')}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass('phone')}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.phone}</p>}
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Delivery Address</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className={inputClass('street')}
              placeholder="123 Main Street"
            />
            {errors.street && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.street}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClass('city')}
              placeholder="Shartlesville"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.city}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={inputClass('state')}
                placeholder="PA"
              />
              {errors.state && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.state}</p>}
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className={inputClass('zip')}
                placeholder="19526"
              />
              {errors.zip && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.zip}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Payment Information</h2>
        </div>
        <p className="text-sm text-gray-500 mb-6 ml-13 flex items-center gap-2">
          <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Demo only - no real payment processing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className={inputClass('cardNumber')}
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.cardNumber}</p>}
          </div>

          <div>
            <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
              Expiration Date <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="expiration"
              name="expiration"
              value={formData.expiration}
              onChange={handleChange}
              className={inputClass('expiration')}
              placeholder="MM/YY"
            />
            {errors.expiration && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.expiration}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={inputClass('cvv')}
                placeholder="123"
              />
              {errors.cvv && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.cvv}</p>}
            </div>

            <div>
              <label htmlFor="billingZip" className="block text-sm font-medium text-gray-700 mb-1">
                Billing ZIP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="billingZip"
                name="billingZip"
                value={formData.billingZip}
                onChange={handleChange}
                className={inputClass('billingZip')}
                placeholder="19526"
              />
              {errors.billingZip && <p className="mt-1 text-sm text-red-600 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.billingZip}</p>}
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg transform hover:-translate-y-0.5 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing your order...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Place Order
          </span>
        )}
      </button>
    </form>
  )
}

export default CheckoutForm
