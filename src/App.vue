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
        <RouterLink :to="this.auth ? '#' : '/login'" class="logout-btn" @click.prevent="this.auth ? '' : this.logout()">{{ this.auth ? 'Logout' : 'Login' }}</RouterLink>
      </div>
  </nav>

  <RouterView />
</template>

<script>
import { apiUrl } from './config/config';

export default {
  data() {
    return {
      auth : true
    }
  },
  methods: {
    async authenticated() {
      await fetch(apiUrl + '/auth/me', {
          method: 'GET',
          headers: {
              "Accept": "application/json",
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + localStorage.getItem('token')
          },
      }).then((response) => {
        this.auth = false
      }).then((data) => {
        this.auth = true
      }).catch(() => {
        this.auth = false
      });
    },
    
    async logout() {
      await fetch(apiUrl + '/auth/logout', {
          method: 'POST',
          headers: {
              "Accept": "application/json",
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + localStorage.getItem('token')
          },
      }).then(response => {
          if(!response.ok) throw new Error('Network response was not ok')

          return response.json()
      }).then(() => {
        localStorage.removeItem('token')
        
        this.router.push({ name : 'home' })
      }).catch((error) => {
          console.log(error);
      });
    }
  },
  mounted() {
    this.authenticated();
  }
}
</script>

<style scoped>

</style>
