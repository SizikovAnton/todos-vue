<template>
  <div class="content">
    <Header
      @input-completed-selects="inputCompletedSelects"
      @input-priorities-selects="inputPrioritiesSelects"
    />
    <!-- <Header /> -->
    <TodoList
      v-if="getTodos.length"
      :todos="
        getTodos
          | filterCompleted(filterComletedValue)
          | filterPriority(filterPriorityValue)
      "
    />
    <p v-else>Здесь пока ничего нет. Добавьте задачу.</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Header from "@/components/Header";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      filterComletedValue: "all",
      filterPriorityValue: "all",
    };
  },
  methods: {
    inputCompletedSelects(value) {
      this.filterComletedValue = value;
    },
    inputPrioritiesSelects(value) {
      this.filterPriorityValue = value;
    },
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
  filters: {
    //TODO Сделать одну функцию для фильтрации и использовать ее в двух фильтрах?
    filterCompleted: (todos, value) => {
      if (value !== "all") {
        return todos.filter((todo) => todo.completed == value);
      } else {
        return todos;
      }
    },
    filterPriority: (todos, value) => {
      if (value !== "all") {
        return todos.filter((todo) => todo.priority == value);
      } else {
        return todos;
      }
    },
  },
  components: {
    TodoList,
    Header,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";
</style>
