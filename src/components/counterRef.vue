<script setup lang="ts">
import { ref } from 'vue';

// data reactive
const count = ref(0);
// added function
function increment() {
  count.value++;
}
// decrease function
function decrement() {
  count.value--;
}
// reset function
function reset() {
  count.value = 0;
}
</script>
<template>
  <div>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increase</button>
    <button @click="decrement">Decrease</button>
    <button @click="reset">Reset</button>
  </div>
</template>