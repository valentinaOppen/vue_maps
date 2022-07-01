<template>
  <div class="flex justify-between bg-gray p-3">
    <Logo/>
    <SearchInput/>    
    <User/>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {    
    Logo: defineAsyncComponent(() => import('./LogoSerempre.vue')),    
    SearchInput: defineAsyncComponent(() => import('./SearchInput.vue')),    
    User: defineAsyncComponent(() => import('./User.vue'))    
  }

}
</script>

<style>

</style>