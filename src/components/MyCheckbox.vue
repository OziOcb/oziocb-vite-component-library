<template>
  <input
    :class="[`my-checkbox`, { 'my-checkbox--checked': isChecked }]"
    type="checkbox"
    name="check"
    id="check"
    :checked="isChecked"
  />
</template>

<script setup lang="ts">
defineProps<{
  isChecked: boolean;
}>();
</script>

<style scoped>
.my-checkbox {
  width: 40px;
  height: 40px;
}
.my-checkbox.my-checkbox--checked {
  opacity: 0.3;
}
</style>
