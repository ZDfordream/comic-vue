<template>
  <div class="player-root">
    <head-top title-name="[钢琴]名侦探柯南" :show-back-icon="true"></head-top>
    <video autoplay width="100%" height="200"
           :src="this.videoUrl"
           controls="controls">
      您的浏览器不支持 video 标签。
    </video>
    <p class="recommend">更多精彩推荐</p>
    <div class="block">
      <video-item :item="item" v-for="(item,index) in videoImageList" :key="index"></video-item>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/common/HeadTop'
  import VideoItem from '../../components/video/VideoItem'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        videoImageList: [],
      }
    },
    created() {
      this.http.get("/get-video-player")
        .then(response => {
          this.videoImageList = response.videoImageList;
        })
        .catch(error => {
          console.log(error)
        })
    },
    components: {
      VideoItem,
      headTop,
    },
    computed: {
      ...mapGetters([
        'videoUrl',
      ])
    },
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .player-root {
    background: #f8f8f8;

    .recommend {
      text-align: center;
      margin-top: 10px;
      size: 24px;
      color: $primary;
    }

    .block {
      padding-top: 10px;
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
</style>

