<template>
  <div class="basic-select" tabindex="0" @blur="optionListShow = false">
    <div
      class="basic-select__trigger"
      @click="onClickTrigger"
      :class="{ 'basic-select__trigger_error': isError }"
    >
      <span class="basic-select__trigger-text">{{ selectedTitle }}</span>
      <IconBase
        class="basic-select__trigger-icon"
        :height="16"
        :width="16"
        :iconColor="'rgba(0, 32, 51, 0.35)'"
      >
        <IconSelect />
      </IconBase>
    </div>
    <transition name="basic-select__option-list">
      <div
        class="basic-select__option-list"
        v-show="optionListShow"
        @click="onClickOption"
      >
        <span
          class="basic-select__option"
          v-for="option of selects"
          :key="option.value"
          :data-value="option.value"
          :class="{
            'basic-select__option_selected': option.value == selectedValue,
          }"
        >
          {{ option.title }}
        </span>
      </div>
    </transition>
    <div class="basic-select__error" v-if="isError">
      {{ errorText }}
    </div>
  </div>
</template>

<script>
import IconBase from "../icons/IconBase.vue";
import IconSelect from "../icons/IconSelect.vue";
// TODO Вынести список в другой компонент?
// TODO Добавить поиск по списку
// TODO Добавить скролл
// TODO Добавить реакцию на клавиши при фокусе
// TODO Добавить оформление для placeholder
// TODO Добавить масштабирование под размер опций
// FIXME Выровнять компоненты формы по высоте
export default {
  data: function () {
    return {
      optionListShow: false,
      selectedValue: this.value,
      isError: false,
      errorText: "Ошибочка вышла",
    };
  },
  props: {
    selects: {
      type: Array,
      required: true,
    },
    value: [Number, String],
    placeholder: {
      type: String,
      default: "Выберите значение",
    },
  },
  computed: {
    selectedTitle() {
      return this.selectedValue
        ? this.selects.find((item) => item.value == this.selectedValue).title
        : this.placeholder;
    },
  },
  methods: {
    onClickTrigger() {
      this.optionListShow = !this.optionListShow;
    },
    onClickOption(event) {
      this.selectedValue = event.target.dataset.value;
      this.optionListShow = !this.optionListShow;
      this.$emit("input", this.selectedValue);
    },
  },
  components: {
    IconBase,
    IconSelect,
  },
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";
.basic-select {
  position: relative;
  user-select: none;
  //
  outline: none;
  &:focus &__trigger {
    border-color: $clr-border-default-focus;
  }
  //

  &__trigger {
    @include form-item_theme_default;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &-icon {
      height: 100%;
    }

    &_error {
      border-color: $clr-alert;
    }
  }

  &__option {
    &-list {
      position: absolute;
      left: 0;
      right: 0;

      z-index: 10;

      padding: $space-xs / 2 0;

      border: 1px solid $clr-border-default;
      border-radius: $border-radius;
      background-color: #fff;

      box-shadow: 0px 4px 4px rgba(0, 32, 51, 0.04),
        0px 8px 24px rgba(0, 32, 51, 0.12);

      // TODO Добавить анимацию смещения на вертикали
      &-enter-active,
      &-leave-active {
        transition: opacity 0.2s;
      }

      &-enter,
      &-leave-to {
        opacity: 0;
      }
    }

    display: block;
    padding: $space-xs / 2 $space-xs;
    position: relative;

    cursor: pointer;

    &:hover {
      background: rgba(0, 66, 105, 0.05);
    }

    &_selected::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;

      // height: 100%;
      border-left: 2px solid $clr-bg-primary;
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
