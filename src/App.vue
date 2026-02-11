<!-- tugas 1 -->
<template>
  <div id="app">
    <nav>
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/proxy">Proxy</router-link> |
      <router-link to="/destructure">Destructure</router-link> |
      <router-link to="/nexttick">Nexttick</router-link> |
      <router-link to="/shallow">Shallow</router-link> |
      <router-link to="/unwrap">Unwrap</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
nav { padding: 12px; }
nav a { margin-right: 8px; text-decoration: none; color: #3b82f6 }
main { padding: 16px }
</style>