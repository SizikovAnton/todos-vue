<template>
  <div class="input-text">
    <input
      type="text"
      class="input-text__input"
      :value="value"
      :class="{ 'input-text__input_error': isError }"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
    <div class="input-text__error" v-if="isError">{{ errorText }}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      errorText: "Ошибочка вышла",
      isError: false,
    };
  },
  props: {
    value: String,
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.input-text {
  &__input {
    @include form-item_theme_default;
    &_error {
      border-color: $clr-alert;
    }
  }

  &__error {
    // TODO Исправить позиционирование
    // position: absolute;

    padding-left: $space-xs;
    padding-right: $space-xs;
    padding-top: $space-xs / 2;

    font-size: 12px;
    color: $clr-alert;
  }
}
</style>
