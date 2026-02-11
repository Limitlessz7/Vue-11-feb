<script setup>
import { reactive } from 'vue'

// raw object asli
const raw = {
  name: "Budi"
}

// proxy dari raw
const proxy = reactive(raw)

// fungsi ubah raw (tidak ke detect)
function ubahRaw(){
  raw.name = "Diubah dari RAW"
  console.log("raw diubah")
}

// fungsi ubah proxy (ke detect)
function ubahProxy(){
  proxy.name = "Diubah dari PROXY"
}
</script>

<template>
  <div>
    <h2>Proxy vs Raw</h2>

    <p>Nama: {{ proxy.name }}</p>

    <button @click="ubahRaw">Ubah dari RAW</button>
    <button @click="ubahProxy">Ubah dari PROXY</button>

    <p>Apakah proxy === raw ? {{ proxy === raw }}</p>
  </div>
</template>