import { calculateDiscount } from "../src/calculateDiscount"

describe("calculateDiscount", () => {
  it("applies no discount for quantities 10 or less", () => {
    expect(calculateDiscount(100, 10)).toBe(1000)
  })

  it("applies a 10% discount for quantities over 10 and up to 20", () => {
    expect(calculateDiscount(100, 15)).toBe(1350)
  })

  it("applies a 15% discount for quantities over 20 and up to 50", () => {
    expect(calculateDiscount(100, 30)).toBe(2550)
  })

  it("applies a 25% discount for quantities over 50", () => {
    expect(calculateDiscount(100, 60)).toBe(4500)
  })

  it("handles zero quantity", () => {
    expect(calculateDiscount(100, 0)).toBe(0)
  })

  it("throws an error for negative price", () => {
    expect(() => calculateDiscount(-100, 10)).toThrow(
      "Price and quantity must be non-negative"
    )
  })

  it("throws an error for negative quantity", () => {
    expect(() => calculateDiscount(100, -10)).toThrow(
      "Price and quantity must be non-negative"
    )
  })
})
