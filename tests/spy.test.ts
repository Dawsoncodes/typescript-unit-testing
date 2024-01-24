import * as api from "../src/api"

describe("Stubs", () => {
  it("Should call the formatData function when the api is being called", async () => {
    // Create a spy for `formatTodo`
    const spy = jest.spyOn(api, "formatTodo")

    // Call the api
    await api.getTodos()

    // Expect the spy to have been called
    expect(spy).toHaveBeenCalled()

    // Since we get an array of 200 items, then the spy should have been called 200 times
    expect(spy).toHaveBeenCalledTimes(200)
  })
})
