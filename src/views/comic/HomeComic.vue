<template>
  <div class="home-comic">
    <scroll :top="0"
            :bottom="48"
            @onScroll="onScroll"
            ref="scroll">
      <van-swipe :autoplay="3000" indicator-color="#ff9a6a">
        <van-swipe-item v-for="image in banner" :key="image">
          <img v-lazy="image" class="banner"/>
        </van-swipe-item>
      </van-swipe>
      <img src="../../assets/image/comic_block_header.png" class="block-header">
      <div class="block">
        <comic-item :item="item" v-for="item in blockList" :key="item.cover"></comic-item>
      </div>
      <img src="../../assets/image/comic_recommend_everyday_header.png" class="block-header">
      <div class="recommend-everyday" @click.stop.prevent="selectComic(recommendEveryDay)">
        <img v-lazy="recommendEveryDay.cover">
        <div class="recommend-everyday-text">
          <p class="name">{{recommendEveryDay.title}}</p>
          <p class="name">{{recommendEveryDay.author}}</p>
        </div>
      </div>
      <img src="../../assets/image/comic_update_today_header.png" class="block-header">
      <div class="update-today">
        <img src="../../assets/image/comic_update_today_left.png" class="update-today-left">
        <div class="update-today-right">
          <div class="update-today-right-item" v-for="item in updateTodayList">
            <img v-lazy="item.cover">
            <div class="update-today-right-text" @click.stop.prevent="selectComic(item)">
              <p class="name">{{item.title}}</p>
              <p class="name">{{item.author}}</p>
              <p class="name">{{item.newUpdate}}</p>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <loading :show-loading="showLoading"></loading>
  </div>
</template>

<script>
  import ComicItem from '../../components/mine/ComicItem'
  import Scroll from '../../components/scroll/Scroll'
  import Loading from '../../components/loading/Loading'

  export default {
    data() {
      return {
        banner: [],
        blockList: [],
        recommendEveryDay: {},
        updateTodayList: [],
        titleName: "仿腾讯动漫",
        currentY: 0,
        showLoading: true
      }
    },
    components: {
      ComicItem,
      Scroll,
      Loading
    },
    methods: {
      selectComic(item) {
        this.$router.push({path: `/comic-detail/100`})
      },
      onScroll(offsetY) {
        this.currentY = offsetY;
      }
    },
    created() {
      this.currentY = 0;
      this.http.get("/get-home-comic")
        .then(response => {
          this.banner = response.banner;
          this.blockList = response.blockList;
          this.recommendEveryDay = response.recommendEveryDay;
          this.updateTodayList = response.updateTodayList;
          setTimeout(() => {
            this.showLoading = false;
          }, 800)
        })
        .catch(error => {
          console.log(error)
          setTimeout(() => {
            this.showLoading = false;
          }, 800)
        })
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.currentY)
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .home-comic {
    background-color: $comicBgColor;
    display: flex;
    margin-bottom: 48px;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
    }
    @include wh(100%, 100%);
    .banner {
      @include wh(100%, 200px);
      display: block;
    }
    .block-header {
      width: 100%;
    }
    .block {
      display: flex;
      flex-flow: row wrap;
      margin-left: 5px;
      margin-right: 5px;
      justify-content: space-around;
    }
    .recommend-everyday {
      display: flex;
      flex-direction: column;
      img {
        @include wh(100%, 200px)
      }
      .recommend-everyday-text {
        display: flex;
        justify-content: space-between;
        @include sc(16px, $mediumGray);
        margin: 4px 10px;
      }
    }
    .update-today {
      display: flex;
      background-color: white;
      .update-today-left {
        flex: 1.3;
        height: 400px;
      }
      .update-today-right {
        flex: 2;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .update-today-right-item {
          display: flex;
          align-items: center;
          @include wh(100%, 120px);
          img {
            @include wh(80px, 120px);
          }
          .update-today-right-text {
            margin-left: 15px;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p {
              @include singleLine
            }
          }
        }
      }
    }
  }

</style>


