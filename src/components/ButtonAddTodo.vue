<template>
  <div class="">
    <BasicButton @click.native="$refs.modal.show = true">
      Добавить задачу
    </BasicButton>
    <!-- TODO Подумать над модальным окном -->
    <Modal ref="modal">
      <FormAddTodo @form-submit="formSubmit" />
    </Modal>
  </div>
</template>

<script>
import FormAddTodo from "./FormAddTodo.vue";
import BasicButton from "./ui/BasicButton.vue";
import Modal from "./ui/Modal.vue";

export default {
  props: {
    priorityList: Array,
  },
  methods: {
    formSubmit() {
      this.$refs.modal.show = false;
    },
  },
  components: {
    BasicButton,
    Modal,
    FormAddTodo,
  },
};
</script>
