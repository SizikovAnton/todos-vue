<template>
  <div class="content">
    <header class="todo-header">
      <router-link :to="'/'">Назад к списку</router-link>
    </header>
    <FormAddTodo :todo="todo" />
  </div>
</template>

<script>
// TODO Добавить вывод сообщения об успешном изменении
import { mapGetters } from "vuex";
import FormAddTodo from "../components/FormAddTodo.vue";
export default {
  components: { FormAddTodo },
  name: "Todo",
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["getTodoById"]),
    todo: function () {
      return this.getTodoById(+this.$route.params.id);
    },
  },
};
</script>

<style lang="scss">
.todo-header {
  margin-bottom: 10px;
}
</style>
