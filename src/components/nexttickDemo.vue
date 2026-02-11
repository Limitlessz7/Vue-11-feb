<script setup>
import { ref, nextTick } from 'vue'

const count = ref(0)
const el = ref(null)

async function tambah(){
  count.value++

  // sebelum nextTick (DOM belum pasti update)
  console.log("Sebelum nextTick:", el.value.textContent)

  await nextTick()

  // setelah nextTick (DOM sudah update)
  console.log("Sesudah nextTick:", el.value.textContent)
}
</script>

<template>
  <div>
    <h2>NextTick Demo</h2>

    <p ref="el">Count: {{ count }}</p>

    <button @click="tambah">Tambah</button>
  </div>
</template>