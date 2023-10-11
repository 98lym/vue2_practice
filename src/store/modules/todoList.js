const todoList = {
  namespaced: true,
  state: {
    todoLists: [],
  },
  mutations: {
    getInputValue: (state, inputValue) => {
      const { todoLists } = state
      if (todoLists.some((item) => item.inputValue === inputValue)) return
      const firstItem = {
        id: todoLists.length,
        inputValue,
        status: false,
      }
      state.todoLists = [firstItem, ...todoLists]
    },
  },
}
export default todoList
