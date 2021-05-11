<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.button {
  //TODO разобраться с отступом снизу
  padding: $space-xs $space-xs * 2;

  font-size: 16px;
  line-height: 1;
  color: $clr-text-white;
  background-color: $clr-bg-primary;

  border: 1px solid $clr-bg-primary;
  border-radius: $border-radius;

  user-select: none;
  transition-property: color, background-color, border-color;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: $clr-bg-primary-hover;
    border-color: $clr-bg-primary-hover;
  }

  &_view_secondary {
    background-color: #fff;
    color: $clr-bg-primary;

    &:hover {
      color: $clr-bg-primary-hover;
      background-color: #fff;
    }
  }

  &_icon {
    padding: $space-xs / 2;
    font-size: 14px;
  }
}
</style>
