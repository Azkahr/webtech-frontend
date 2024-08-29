<template>
  <nav class="navbar">
      <div class="nav-left">
          <img src="./assets/img/logo.png" alt="" class="nav-brand">
          <div class="nav-items">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">Blog</RouterLink>
            <a href="portfolio.html">Portfolio</a>
          </div>
      </div>
      <div class="logout">
          <a href="#" class="logout-btn">Logout</a>
      </div>
  </nav>

  <RouterView />
</template>

<script>

</script>

<style scoped>

</style>
