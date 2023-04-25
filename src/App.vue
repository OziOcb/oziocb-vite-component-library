<template>
  <h1 class="hello">Hello</h1>

  <MyButton primary>button primary</MyButton>
  <MyButton>button default</MyButton>
</template>

<script setup lang="ts">
import MyButton from "@/components/MyButton.vue";
</script>

<style scoped>
.hello {
  background-color: #dad;
}
</style>
