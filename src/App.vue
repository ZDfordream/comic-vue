<template>
  <div id="app">
    <keep-alive>
      <router-view class="view-router" v-if="!$route.meta.notKeepAlive"></router-view>
    </keep-alive>
    <router-view class="view-router" v-if="$route.meta.notKeepAlive"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }

</script>

<style lang="scss">

</style>
