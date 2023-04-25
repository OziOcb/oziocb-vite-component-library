<template>
  <button :class="['my-button', primary && 'my-button--primary']">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  primary?: boolean;
}>();
</script>

<style scoped>
.my-button {
  background-color: #ada;
}
.my-button.my-button--primary {
  background-color: #b00b55;
}
</style>
