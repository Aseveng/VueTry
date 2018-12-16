export default {
  state: {
    // 应用启动时， count置为0
    count: 0,
    todos: [
      { id: 1, text: '水果类', done: true },
      { id: 2, text: '苹果', done: true },
      { id: 3, text: '苹果', done: false },
      { id: 4, text: '香蕉', done: true },
      { id: 5, text: '橘子', done: true }
    ]
  },
  getters: {
    doneTodos: state => {
      // 通过方法访问
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      // 通过属性访问
      return getters.doneTodos.length
    },
    removeTodo: state => {
      state.todos = state.todos.filter(({ id }) => id !== 4)
    }
  }
}
