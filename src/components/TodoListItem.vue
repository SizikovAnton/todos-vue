<template>
  <router-link tag="div" :to="'/todo/' + todo.id" class="todoItem">
    <!-- Исправить router-link tag -->
    <header class="todoItem__header">
      <div
        :class="[
          'todoItem__title',
          { todoItem__title_completed: todo.completed },
        ]"
      >
        {{ todo.title }}
      </div>
      <Badge class="todoItem__status" :style="statusStyle">
        {{ priority.title }}
      </Badge>
      <BasicButton
        class="todoItem__completed button_view_secondary button_icon"
        :class="{ todoItem__completed_check: todo.completed }"
        @click.native.stop="сompletedTodo(todo.id)"
      >
        <!-- FIXME Исправить на pascalecase -->
        <IconBase>
          <IconClose v-if="todo.completed" />
          <IconCheck v-else />
        </IconBase>
      </BasicButton>
      <BasicButton
        class="todoItem__delete button_view_secondary button_icon"
        @click.native.stop="removeTodo(todo.id)"
      >
        <IconBase><icon-trash /></IconBase>
      </BasicButton>
    </header>
    <hr />
    <div class="todoItem__description">
      {{ todo.description }}
    </div>
  </router-link>
</template>

<script>
import IconBase from "./icons/IconBase.vue";
import IconTrash from "./icons/IconTrash.vue";
import IconCheck from "./icons/IconCheck.vue";
import IconClose from "./icons/IconClose.vue";
import BasicButton from "./ui/BasicButton.vue";
import Badge from "./ui/Badge.vue";

import { mapActions } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    priority: {
      type: Object,
      required: true,
    },
  },
  components: {
    IconBase,
    IconTrash,
    IconCheck,
    IconClose,
    BasicButton,
    Badge,
  },
  methods: {
    ...mapActions(["сompletedTodo", "removeTodo"]),
  },
  computed: {
    statusStyle: function () {
      if (this.todo.completed) {
        return {
          backgroundColor: "#24c38e", //TODO Подумать как брать цвет из scss
          borderColor: "#24c38e",
          color: "#fafafa",
        };
      } else {
        return {
          backgroundColor: this.priority.color,
          borderColor: this.priority.color,
          color: this.priority.textColor,
        };
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.todoItem {
  position: relative;
  // width: auto;
  // max-width: 100%;

  padding: $space-xs;
  margin: $space-xs;

  border: 1px solid $clr-text-default;
  border-radius: $border-radius;

  @include media-s {
    padding-top: $space-xs * 2;
  }

  &__header {
    display: flex;
    align-items: center;
  }
  &__title {
    @include font-bold;
    margin-right: auto;

    &_completed {
      text-decoration: line-through;
    }
  }
  &__status {
    &_completed {
      background-color: $clr-success;
    }

    @include media-s {
      position: absolute;
      margin: 0;
      top: 0;
      right: 0;
      left: 0;

      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;

      span {
        display: none;
      }
    }
  }
  &__completed {
    margin-left: $space-xs;

    &:hover {
      color: $clr-success;
      border-color: $clr-success;
    }

    &_check {
      &:hover {
        color: $clr-alert;
        border-color: $clr-alert;
      }
    }
  }
  &__delete {
    margin-left: $space-xs;

    &:hover {
      color: $clr-alert;
      border-color: $clr-alert;
    }
  }
}
</style>
