<template>
  <transition name="modal">
    <div
      v-if="show"
      @click.self="closeModal"
      @close-modal="closeModal"
      class="modal-paranja"
    >
      <div class="modal">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
// Придумать название из двух слов
//FIXME Закрывается, если отпустить кнопку мыши на фоне
//FIXME Работает фокус под модальным окном
// TODO Добавить закрытие при нажатии ESC
export default {
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    closeModal: function () {
      this.show = false;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";

// TODO Сделать область под модальным окном недоступной
.modal {
  position: relative;

  padding: $space-s;

  background-color: #fff;
  border-radius: $border-radius;

  z-index: 100;

  &-paranja {
    position: absolute; //Или fixed?
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: $clr-modal-paranja;

    z-index: 90;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
