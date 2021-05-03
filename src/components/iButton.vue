<template>
  <button class="i-btn"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

enum Colors {
  primary = "primary",
  secondary = "secondary",
}

type Color = keyof typeof Colors;

export default defineComponent({
  props: {
    color: {
      type: String as () => Color,
      default: Colors.primary,
    },
  },
  computed: {
    getButtonColor(): string {
      return `btn-${this.color}`;
    },
  },
});
</script>

<style></style>
