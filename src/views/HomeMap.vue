<template>
  <Header/>
  <Footer/>
</template>

<script lang="ts">
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: { 
    Header: defineAsyncComponent(() => import('../components/Header.vue')),
    Footer: defineAsyncComponent(() => import('../components/Footer.vue'))
  }
}
</script>

<style>

</style>