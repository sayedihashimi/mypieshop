const STORAGE_KEY = 'southsidePieShop_cart'

export function loadCart() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    
    const parsed = JSON.parse(data)
    
    // Validate the data structure
    if (!Array.isArray(parsed)) return []
    
    // Validate each item has required fields
    return parsed.filter(item => 
      item.pieId !== undefined &&
      item.name &&
      item.price &&
      typeof item.quantity === 'number' &&
      item.quantity > 0
    )
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
    return []
  }
}

export function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
    // Handle quota exceeded error
    if (error.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded')
    }
  }
}

export function clearStoredCart() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Error clearing cart from localStorage:', error)
  }
}
