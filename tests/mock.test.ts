describe("Mocking functions", () => {
  it("should mock a function", () => {
    const mockFn = jest.fn()
    mockFn(1)
    mockFn(2)
    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(mockFn).toHaveBeenCalledWith(1)
    expect(mockFn).toHaveBeenCalledWith(2)
  })

  it("should mock a return value", () => {
    const mockFn = jest.fn()
    mockFn.mockReturnValue(42)
    expect(mockFn()).toBe(42)
  })

  it("should mock a module", () => {
    jest.mock("../src/calculateDiscount", () => ({
      calculateDiscount: jest.fn(() => 42),
    }))
    const { calculateDiscount } = require("../src/calculateDiscount")

    expect(calculateDiscount()).toBe(42)
  })
})
