export default {
  state: {
    todos: [
      {
        id: 0,
        title: "Купить хлеб",
        description: "Белый, а лучше с сырной корочкой",
        priority: 1,
        completed: false,
      },
      {
        id: 1,
        title: "Купить масло 11111111",
        description: "Фермерское местное, вкусно, но дорого.",
        priority: 0,
        completed: false,
      },
      {
        id: 2,
        title: "Купить пони",
        description: "Бежевую с розовой гривой!!!",
        priority: 2,
        completed: false,
      },
    ],
    //Вынести приоритеты в отдельный модуль?
    priorities: [
      {
        id: 0,
        title: "Не важно",
      },
      {
        id: 1,
        title: "Важно",
        color: "#DEE4E8",
      },
      {
        id: 2,
        title: "Очень важно",
        color: "#F38B01",
        textColor: "#FAFAFA",
      },
    ],
  },
  actions: {
    сompletedTodo({ commit }, id) {
      commit("сompletedTodo", id);
    },
    addTodo({ commit, state }, todo) {
      todo.id = state.todos.length
        ? state.todos[state.todos.length - 1].id + 1
        : 0;
      commit("addTodo", todo);
    },
    updateTodo({ commit }, todo) {
      commit("updateTodo", todo);
    },
    removeTodo({ commit }, id) {
      commit("removeTodo", id);
    },
  },
  mutations: {
    сompletedTodo(state, id) {
      // Можно ли в мутациях использовать геттеры?
      const todo = state.todos.find((item) => item.id === id);
      todo.completed = !todo.completed;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex((item) => item.id === todo.id);
      state.todos.splice(index, 1, todo);
    },
    removeTodo(state, id) {
      const todo = state.todos.findIndex((item) => item.id === id);
      state.todos.splice(todo, 1);
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoById: (state) => (id) => state.todos.find((item) => item.id === id),
    getPriorities: (state) => state.priorities,
    getPriorityById: (state) => (id) =>
      state.priorities.find((item) => item.id === id),
  },
};
