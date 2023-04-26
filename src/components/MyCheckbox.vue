<template>
  <input
    class="my-checkbox"
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
</style>
