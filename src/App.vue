<template>
  <nav v-if="!isAdminRoute" class="navbar">
    <div class="nav-left">
      <img src="./assets/img/logo.png" alt="" class="nav-brand">
      <div class="nav-items">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </div>
    </div>
    <div class="logout">
      <RouterLink 
        :to="authStore.isAuthenticated ? '#' : '/login'" 
        class="logout-btn" 
        @click.prevent="authStore.isAuthenticated ? handleLogout() : null"
      >
        {{ authStore.isAuthenticated ? 'Logout' : 'Login' }}
      </RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuth } from './stores/auth';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const authStore = useAuth();
const router = useRouter();
const route = useRoute();

const isAdminRoute = computed(() => {
  return route.path.startsWith('/admin');
});


const handleLogout = async () => {
  await authStore.logout();
  router.push('/login');
};

onMounted(async () => {
  await authStore.fetchUser();
});
</script>

<style scoped>
/* Your styles here */
</style>