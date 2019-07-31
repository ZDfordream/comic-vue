<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <van-tabbar v-model="active"
                active-color="#ff9a6a"
                inactive-color="#999999"
                @change="changeTabBar(active)">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="music-o">短视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        active: 0,
      }
    },
    created() {
      if (this.$route.path === "/home-comic") {
        this.active = 0;
      } else if (this.$route.path === "/home-video") {
        this.active = 1;
      } else if (this.$route.path === "/home-mine") {
        this.active = 2;
      }
    },
    methods: {
      changeTabBar(active) {
        switch (active) {
          case 0:
            this.$router.replace({path: '/home-comic'})
            break;
          case 1:
            this.$router.replace({path: '/home-video'})
            break;
          case 2:
            this.$router.replace({path: '/home-mine'})
            break;
        }
      }
    },
  }
</script>

<style scoped>
</style>
