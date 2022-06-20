<template>
  <Header/>
  <Footer/>
</template>

<script lang="ts">
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: { 
    Header: defineAsyncComponent(() => import('./Header.vue')),
    Footer: defineAsyncComponent(() => import('./Footer.vue'))
  }
}
</script>

<style>

</style>