/**
 * Mocking client-server processing
 */
import _products from './products'

const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export const api = {
  getProducts() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_products), TIMEOUT)
    })
  }
}
