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
    w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors
    ${errors[fieldName] ? 'border-red-400 bg-red-50' : 'border-gray-300'}
  `

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
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
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
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
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
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
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address *
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
            {errors.street && <p className="mt-1 text-sm text-red-600">{errors.street}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City *
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
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State *
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
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code *
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
              {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h2>
        <p className="text-sm text-gray-500 mb-4">Demo only - no real payment processing</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number *
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
            {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
          </div>

          <div>
            <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
              Expiration Date *
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
            {errors.expiration && <p className="mt-1 text-sm text-red-600">{errors.expiration}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV *
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
              {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
            </div>

            <div>
              <label htmlFor="billingZip" className="block text-sm font-medium text-gray-700 mb-1">
                Billing ZIP *
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
              {errors.billingZip && <p className="mt-1 text-sm text-red-600">{errors.billingZip}</p>}
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  )
}

export default CheckoutForm
