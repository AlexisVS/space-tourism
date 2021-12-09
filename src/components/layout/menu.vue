<template>
  <div class="w-full flex items-center text-white fixed mt-14">
    <router-link to="/">
      <img class="w-10 mx-12" :src="require('../../assets/shared/logo.svg')" alt />
    </router-link>
    <hr class="w-8/12 opacity-60 relative left-10 z-10" />
    <nav class="w-full bg-transparent h-20 flex items-center justify-center space-x-14 bg-opacity-20 nav-blur">
      <router-link class="h-full flex flex-col justify-between group" to="/">
      <div class=""></div>
        00 HOME
        <div class="w-full h-0.5 group-hover:bg-white"></div>
      </router-link>
      <router-link class="h-full flex flex-col justify-between group" to="/destination/1">
      <div class=""></div>
        01 DESTINATION
        <div class="w-full h-0.5 group-hover:bg-white"></div>
      </router-link>
      <router-link class="h-full flex flex-col justify-between group" to="/crew/1">
      <div class=""></div>
        02 CREW
        <div class="w-full h-0.5 group-hover:bg-white"></div>
      </router-link>
      <router-link class="h-full flex flex-col justify-between group" to="/technology/1">
      <div class=""></div>
        03 TECHNOLOGY
        <div class="w-full h-0.5 group-hover:bg-white"></div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-blur {
  backdrop-filter: blur(50px);
  background-color: rgba(255, 255, 255, 0.03);
}
</style>