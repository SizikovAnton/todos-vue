<template>
  <div class="todoList" v-if="todos.length">
    <TodoListItem
      v-for="todo of todos"
      :key="todo.id"
      v-bind:todo="todo"
      v-bind:priority="getPriorityById(todo.priority)"
    />
  </div>
  <p v-else>После фильтров ничего не осталось :(</p>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import { mapGetters } from "vuex";

export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {},
  computed: {
    ...mapGetters(["getTodos", "getPriorityById"]),
  },
  components: {
    TodoListItem,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.todoList {
  width: $wrap-m;

  @include media-m {
    width: 100%;
  }
}
</style>
