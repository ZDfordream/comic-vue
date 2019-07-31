<template>
  <div class="block-item-wrapper" @click.stop.prevent="selectVideo()">
    <img v-lazy="item">
    <p class="video-des">#味里故乡#王晓晨 匡牧野山东篇：红瓦绿树间的文艺味道,红瓦绿树间的文艺味道</p>
    <div class="bottom-info">
      <img class="video-play-icon" src="../../assets/image/play_video.png">
      <span class="bottom-play-count">1.3万</span>
      <span class="bottom_play-text">次播放</span>
      <span class="bottom-zan">1305赞</span>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      item: {
        type: String
      }
    },
    methods: {
      selectVideo() {
        this.setVideoUrl('https://video.pearvideo.com/mp4/third/20190517/cont-1555570-12719568-133553-hd.mp4');
        this.$router.push({path: '/player'})
      },
      ...mapActions([
        'setVideoUrl',
      ])
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .block-item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    width: 47%;
    background-color: white;
    border-radius: 8px;
    box-sizing: border-box;
    img {
      @include wh(100%, 100px);
      margin-bottom: 3px;
      border-radius: 8px 8px 0 0;
    }
    .video-des {
      @include ellipsis2(2);
      color: $lightGray;
      margin: 0px 5px;
    }
    .bottom-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 5px 5px;
      width: 100%;
      color: $lightGray;
      .video-play-icon {
        width: 14px;
        height: 14px;
        margin-top: 3px;
      }
      .bottom-play-count {
        color: $primary;
      }
      .bottom_play-text {
        flex: 1;
      }
      .bottom-right {
        line-height: 17px;
        text-align: center;
      }
    }
  }

</style>
