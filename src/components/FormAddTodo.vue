<template>
  <form class="formAddTodo" @submit.prevent="onSubmit">
    <InputText
      class="formAddTodo__input-title"
      placeholder="Заголовок"
      v-model="title"
      ref="inputTitle"
    />
    <BasicSelect
      class="formAddTodo__priority"
      :selects="selectList"
      :placeholder="'Выберите приоритет'"
      v-model="priority"
      ref="selectPriority"
    />
    <BasicTextarea
      class="formAddTodo__description"
      placeholder="Описание задачи"
      rows="10"
      v-model="description"
    >
    </BasicTextarea>
    <BasicButton type="submit">
      {{ id === null ? "Добавить" : "Изменить" }}
    </BasicButton>
  </form>
</template>

<script>
import BasicButton from "./ui/BasicButton.vue";
import BasicSelect from "./ui/BasicSelect.vue";
import BasicTextarea from "./ui/BasicTextarea.vue";
import InputText from "./ui/InputText.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data: function () {
    return {
      id: null,
      title: null,
      priority: null,
      description: null,
      valid: false,
    };
  },
  props: {
    priorityList: Array,
    todo: Object,
  },
  methods: {
    ...mapActions(["addTodo", "updateTodo"]),
    onSubmit() {
      let error = false;
      this.$refs.inputTitle.isError = false;

      if (!this.title) {
        error = true;
        this.$refs.inputTitle.isError = true;
        this.$refs.inputTitle.errorText = "Обязательно поле";
      } else if (this.title.length > 20) {
        error = true;
        this.$refs.inputTitle.isError = true;
        this.$refs.inputTitle.errorText = "Не более 20 символов";
      }
      if (this.priority === null) {
        error = true;
        this.$refs.selectPriority.isError = true;
        this.$refs.selectPriority.errorText = "Обязательное поле";
      }
      if (!error) {
        let newTodo = {
          id: this.id,
          title: this.title,
          priority: +this.priority,
          description: this.description,
          completed: this.id === null ? false : this.todo.completed,
        };
        if (newTodo !== null) {
          this.updateTodo(newTodo);
        } else {
          newTodo.completed = false;
          this.addTodo(newTodo);
        }
        this.$emit("form-submit");
      }
    },
  },
  computed: {
    ...mapGetters(["getPriorities"]),
    selectList() {
      let arr = this.getPriorities.map((item) => {
        return { value: item.id, title: item.title };
      });
      return arr;
    },
  },
  beforeMount() {
    if (this.todo) {
      this.id = this.todo.id;
      this.title = this.todo.title;
      this.priority = this.todo.priority;
      this.description = this.todo.description;
    }
  },
  components: {
    BasicButton,
    InputText,
    BasicTextarea,
    BasicSelect,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.formAddTodo {
  display: flex;
  flex-direction: column;

  &__input {
    &-title {
      margin-bottom: $space-xs;
    }
  }

  &__priority {
    margin-bottom: $space-xs;
  }

  &__description {
    margin-bottom: $space-xs;
  }
}
</style>
