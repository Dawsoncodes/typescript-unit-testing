import * as api from "../src/api"

describe("Mock Restore", () => {
  it("should mock a function and restore it", async () => {
    // Create a stub for `getTodos` that returns a promise
    const stub = jest
      .spyOn(api, "getTodos")
      .mockReturnValue(new Promise((resolve) => resolve("stubbed data")))

    // Call getData - it will return Promise.resolve('stubbed data')
    const result = await api.getTodos() // await is required for promises

    expect(result).toBe("stubbed data")

    // Restore the original implementation if needed
    stub.mockRestore()

    // Call it again with the original implementation
    const result2 = await api.getTodos()

    // Expect an array to be the response
    expect(result2.length).toBeGreaterThan(0)

    const todo = result2[0]

    // First todo id must be 1
    expect(todo.id).toBe(1)
  })
})
