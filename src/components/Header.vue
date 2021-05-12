<template>
  <header class="header">
    <ButtonAddTodo class="header__item" />
    <BasicSelect
      class="header__item"
      :selects="completedSelects"
      :value="filterComletedValue"
      @input="inputCompletedSelects"
    />
    <BasicSelect
      class="header__item"
      :selects="prioritiesSelects"
      :value="filterPriorityValue"
      @input="inputPrioritiesSelects"
    />
  </header>
</template>

<script>
// TODO Придумать название из двух слов
import ButtonAddTodo from "./ButtonAddTodo.vue";
import BasicSelect from "./ui/BasicSelect.vue";
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      completedSelects: [
        { value: "all", title: "Все" },
        { value: 1, title: "Выполнено" },
        { value: 0, title: "Не выполнено" },
      ],
    };
  },
  props: {
    priorityList: Array,
    filterComletedValue: String,
    filterPriorityValue: String,
  },
  computed: {
    ...mapGetters(["getPriorities"]),
    prioritiesSelects() {
      return [
        { value: "all", title: "Все" },
        ...this.getPriorities.map((item) => {
          return { value: item.id, title: item.title };
        }),
      ];
    },
  },
  methods: {
    inputCompletedSelects(value) {
      this.$emit("input-completed-selects", value);
    },
    inputPrioritiesSelects(value) {
      this.$emit("input-priorities-selects", value);
    },
  },
  components: {
    ButtonAddTodo,
    BasicSelect,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";
.header {
  display: flex;
  flex-wrap: wrap;

  &__item {
    margin: $space-xs;
    min-width: 150px; //FIXME Убрать после исправления ширины селектов?
  }
}
</style>
