/*
 * Gets a list of data from an API
 * @throws {Error} If the API call fails
 */
export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")

  const data = await response.json()

  return data.map(formatTodo)
}

interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

/**
 * Takes an unknown object and returns a Todo
 */
export const formatTodo = (todo: any): Todo => {
  return {
    id: todo.id,
    userId: todo.userId,
    completed: todo.completed,
    title: todo.title,
  }
}
