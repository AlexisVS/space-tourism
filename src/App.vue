<template>
  <div id="app" class="w-full min-h-screen">
    <Menu />
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Menu from "./components/layout/menu.vue";
export default {
  components: { Menu }
}
</script>


<style lang="scss">

</style>
