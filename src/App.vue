<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import PabloCamaraLoader from './components/PabloCamaraLoader.vue'
import { useAuthStore } from './stores/useAuthStore'

const authStore = useAuthStore();

onMounted(() => {
  authStore.checkAuth();
})
</script>

<template>
  <header>
    <PabloCamaraLoader />

  </header>

  <RouterView />
</template>

<style scoped>

</style>
