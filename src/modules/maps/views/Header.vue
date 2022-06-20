<template>
  <div class="flex justify-between bg-gray p-5">
    <div class="">
      <img src="../../../assets/logo.svg" alt="">
    </div>    
    <SearchInput/>    
    <User/>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {    
    SearchInput: defineAsyncComponent(() => import('../components/SearchInput.vue')),    
    User: defineAsyncComponent(() => import('../components/User.vue'))    
  }

}
</script>

<style>

</style>