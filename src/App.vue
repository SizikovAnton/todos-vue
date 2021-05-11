<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/scss/_normalize.scss";
@import "@/scss/_vars.scss";

hr {
  height: 1px;
  background-color: $clr-text-default;
  border: none;
  color: $clr-text-default;
}

.app {
  font-family: $font;
  color: $clr-text-default;
  @include font-regular;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
