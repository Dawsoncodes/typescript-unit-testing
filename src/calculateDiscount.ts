export function calculateDiscount(price: number, quantity: number): number {
  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be non-negative")
  }

  let discount = 0

  if (quantity > 50) {
    discount = 0.25 // 25% discount for orders over 50 items
  } else if (quantity > 20) {
    discount = 0.15 // 15% discount for orders over 20 items
  } else if (quantity > 10) {
    discount = 0.1 // 10% discount for orders over 10 items
  }

  return price * quantity * (1 - discount)
}
