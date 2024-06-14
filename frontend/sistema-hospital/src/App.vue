<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 
  <RouterView></RouterView>
  <FooterView/>
</template>

<script>
import FooterView from '@/components/footerDash.vue';

export default {
  name: "footer", // Renaming the app so it won't conflict with the child component
  components: {
    FooterView
  }
}
</script>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilos para el componente Footer */
footer {
  margin-top: auto;
}
</style>