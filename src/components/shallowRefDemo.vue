<script setup>
import { shallowRef } from 'vue'

const big = shallowRef({
  nested: { count: 0 }
})

function tambah(){
  big.value.nested.count++
}

function forceUpdate(){
  big.value = { ...big.value }
}
</script>

<template>
  <div>
    <h2>Shallow Ref</h2>

    <p>{{ big.nested.count }}</p>

    <button @click="tambah">Tambah Nested</button>
    <button @click="forceUpdate">Force Update</button>
  </div>
</template>