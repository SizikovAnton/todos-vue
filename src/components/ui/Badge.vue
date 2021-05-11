<template>
  <div class="badge">
    <span>
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
@import "@/scss/_vars.scss";

.badge {
  padding: $space-xs / 2;

  font-size: 14px;
  text-transform: uppercase;
  color: $clr-bg-primary;
  background-color: #fff;

  border: 1px solid $clr-bg-primary;
  border-radius: $border-radius;

  user-select: none;

  transition: all 0.2s;
}
</style>
