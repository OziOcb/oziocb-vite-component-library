<template>
  <h1 class="hello">Hello</h1>

  <MyButton primary>button primary</MyButton>
  <MyButton>button default</MyButton>

  <MyCheckbox />
</template>

<script setup lang="ts">
import { MyButton, MyCheckbox } from "./components/";
</script>

<style scoped>
.hello {
  background-color: #dad;
}
</style>
