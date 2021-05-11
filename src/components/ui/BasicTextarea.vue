<template>
  <textarea
    class="basic-textarea"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.basic-textarea {
  @include form-item_theme_default;
  resize: none;
}
</style>
