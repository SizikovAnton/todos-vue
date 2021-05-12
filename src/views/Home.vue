<template>
  <div class="content">
    <Header
      :filterComletedValue="filterComletedValue"
      :filterPriorityValue="filterPriorityValue"
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
      // TODO Убрать значение из строки запроса когда 'all'
      // FIXME Исправить NavigationDuplicated
      if (this.filterComletedValue !== this.$route.query.filterComletedValue) {
        this.$router.replace({
          name: "home",
          query: {
            ...this.$route.query,
            filterComletedValue: this.filterComletedValue,
          },
        });
      }
    },
    inputPrioritiesSelects(value) {
      this.filterPriorityValue = value;
      if (this.filterPriorityValue !== this.$route.query.filterPriorityValue) {
        this.$router.replace({
          name: "home",
          query: {
            ...this.$route.query,
            filterPriorityValue: this.filterPriorityValue,
          },
        });
      }
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
  created() {
    if (this.$route.query.filterComletedValue) {
      this.filterComletedValue = this.$route.query.filterComletedValue;
    }
    if (this.$route.query.filterPriorityValue) {
      this.filterPriorityValue = this.$route.query.filterPriorityValue;
    }
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
