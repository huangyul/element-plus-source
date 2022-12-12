<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content == 0 || isDot)"
        v-text="content"
        class="el-badge__content"
        :class="[
          'el-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot,
          },
        ]"
      ></sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'ElBadge',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return (
          ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
        );
      },
    },
  },
  setup(props) {
    const content = computed(() => {
      if (props.isDot) {
        return;
      }
      const { value, max } = props;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    });
    return {
      content,
    };
  },
};
</script>

<style scoped></style>