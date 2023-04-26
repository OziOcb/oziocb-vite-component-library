<template>
  <h1 class="hello">Hello</h1>

  <MyButton primary>button primary</MyButton>
  <MyButton>button default</MyButton>

  <MyCheckbox :is-checked="true" />
  <MyCheckbox :is-checked="false" />
</template>

<script setup lang="ts">
import { MyButton, MyCheckbox } from "./components/";
</script>

<style scoped>
.hello {
  background-color: #dad;
}
</style>
