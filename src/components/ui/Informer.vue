<template>
  <div :class="['informer', `informer_status_${status}`]">
    <p class="informer__header">{{ header }}</p>
    <p class="informer__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    text: String,
    status: String,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

.informer {
  border-radius: $border-radius;
  padding: $space-xs;

  &__header {
    font-weight: bold;
    margin: 0;
  }

  &__text {
    margin: 0;
    margin-top: $space-xs;
  }

  &_status {
    &_alert {
      color: $clr-text-white;
      background-color: $clr-alert;
    }
  }
}
</style>
