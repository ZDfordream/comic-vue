<template>
  <div class="loading" v-if="showLoading">
    <div class="wrapper">
      <img src="../../assets/image/loading_1.png" class="loading-icon" v-show="currentIndex===0"/>
      <img src="../../assets/image/loading_2.png" class="loading-icon" v-show="currentIndex===1"/>
      <img src="../../assets/image/loading_3.png" class="loading-icon" v-show="currentIndex===2"/>
      <img src="../../assets/image/loading_4.png" class="loading-icon" v-show="currentIndex===3"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showLoading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        totalCount: 0,
      }
    },
    mounted() {
      if (this.showLoading) {
        this.task = setInterval(() => {
          this.totalCount++
          console.log(this.totalCount)
        }, 200)
      }
    },
    computed: {
      currentIndex() {
        return this.totalCount % 4
      }
    },
    watch: {
      showLoading(newValue) {
        if (!newValue && this.task) {
          clearInterval(this.task)
        }
      }
    },
    destroyed() {
      if (this.task) {
        clearInterval(this.task)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .loading {
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: white;
    .loading-icon {
      @include center;
      position: absolute;
      width: 150px;
      height: 150px;
      background-size: 150px;
    }
  }
</style>
