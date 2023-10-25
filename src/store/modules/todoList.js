const todoList = {
  namespaced: true,
  state: {
    todoLists: [],
  },
  mutations: {
    getInputValue: (state, inputValue) => {
      const { todoLists } = state
      const firstItem = {
        id: todoLists.length,
        inputValue,
        status: false,
      }
      state.todoLists = [firstItem, ...todoLists]
    },
    changeChecked: (state, data) => {
      state.todoLists.forEach((value) => {
        const { item, checked } = data
        if (value === item) {
          item.status = checked
        }
      })
    },
    isAllCheckedFn: (state, value) => {
      state.todoLists.forEach((item) => (item.status = value))
    },
    deleteFn: (state, value) => {
      state.todoLists = state.todoLists.filter((item) => item.id !== value.id)
    },
    allDeleteFn: (state) => {
      state.todoLists = state.todoLists.filter((item) => !item.status)
    },
  },
}
export default todoList
