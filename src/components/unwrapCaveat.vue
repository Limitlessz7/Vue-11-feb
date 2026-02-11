<script setup>
import { ref, reactive } from 'vue'

// Case A: ref di dalam reactive object
const state = reactive({
  count: ref(0)
})

function tambahA(){
  state.count++
}

// Case B: ref dalam array
const books = reactive([ref("Vue")])

// Case C: ref dalam Map
const map = reactive(new Map([
  ["count", ref(0)]
]))

function tambahMap(){
  map.get("count").value++
}
</script>

<template>
  <div>
    <h2>Ref Unwrapping</h2>

    <h3>Case A (reactive object)</h3>
    <p>{{ state.count }}</p>
    <button @click="tambahA">Tambah</button>

    <h3>Case B (array)</h3>
    <p>{{ books[0].value }}</p>

    <h3>Case C (map)</h3>
    <p>{{ map.get('count').value }}</p>
    <button @click="tambahMap">Tambah Map</button>
  </div>
</template>