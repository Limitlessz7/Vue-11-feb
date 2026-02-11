<template>
  <div id="app">
    <header class="navbar">
      <div class="brand">Tugas</div>
      <nav class="nav">
        <router-link to="/counter" class="nav-item" active-class="active">Counter</router-link>
        <router-link to="/profile" class="nav-item" active-class="active">Profile</router-link>
        <router-link to="/proxy" class="nav-item" active-class="active">Proxy</router-link>
        <router-link to="/destructure" class="nav-item" active-class="active">Destructure</router-link>
        <router-link to="/nexttick" class="nav-item" active-class="active">NextTick</router-link>
        <router-link to="/shallow" class="nav-item" active-class="active">Shallow</router-link>
        <router-link to="/unwrap" class="nav-item" active-class="active">Unwrap</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}
.brand { font-weight: 600; color: #111827 }
.nav { display: flex; gap: 8px; align-items: center }
.nav-item {
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: background .12s ease, color .12s ease;
}
.nav-item:hover { background: #f9fafb }
.nav-item.active, .nav-item.router-link-active {
  background: #eef2ff;
  color: #1f2937;
  box-shadow: inset 0 -3px 0 #60a5fa;
}
main { padding: 16px }

@media (max-width: 640px) {
  .nav { gap: 6px; overflow-x: auto; padding-bottom: 6px }
  .nav-item { white-space: nowrap }
}
</style>
