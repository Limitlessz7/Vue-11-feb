<script setup>
import { reactive } from 'vue'

// object reaktif (nested)
const state = reactive({
  user: {
    name: 'TenZ',
    profile: {
      age: 17
    }
  }
})

// ubah nama
function gantiNama(){
  state.user.name = "Xeno"
}

// tambah umur
function tambahUmur(){
  state.user.profile.age++
}
</script>

<template>
  <div>
    <h2>Profile Reactive</h2>

    <p>Nama: {{ state.user.name }}</p>
    <p>Umur: {{ state.user.profile.age }}</p>

    <button @click="gantiNama">Ganti Nama</button>
    <button @click="tambahUmur">Tambah Umur</button>
  </div>
</template>