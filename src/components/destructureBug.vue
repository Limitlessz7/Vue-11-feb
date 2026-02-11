<script setup>
import { reactive } from 'vue'

// state reactive
const state = reactive({
  count: 0
})

// destructure (ini bug)
let { count } = state

// tambah dari destructure (tidak update UI)
function tambahDestructure(){
  count++
}

// tambah dari state asli (update UI)
function tambahState(){
  state.count++
}
</script>

<template>
  <div>
    <h2>Destructure Bug</h2>

    <p>State count: {{ state.count }}</p>
    <p>Destructure count: {{ count }}</p>

    <button @click="tambahDestructure">
      Tambah dari destructure
    </button>

    <button @click="tambahState">
      Tambah dari state asli
    </button>
  </div>
</template>