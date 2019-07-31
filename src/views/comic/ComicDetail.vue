<template>
  <div class="detail">
    <head-top :title-name="comicDetailTop.title" :show-back-icon="true"></head-top>
    <div class="detail-top">
      <img v-lazy="comicDetailTop.cover" class="top-cover">
      <div class="detail-top-right">
        <div class="top-header">
          <span class="span-title">
            {{comicDetailTop.title}}
          </span>
          <span class="span-score">
            {{comicDetailTop.score}}</span>
        </div>
        <p class="header-tag">{{comicDetailTop.tag}}</p>
        <p class="header-tag">{{comicDetailTop.author}}</p>
        <p class="header-tag">{{comicDetailTop.popularity}}</p>
        <p class="header-tag">{{comicDetailTop.monthTicket}}</p>
      </div>
    </div>

    <van-tabs v-model="active" :border="false" color="#ff9a6a" title-active-color="#ff9a6a"
              title-inactive-color="#333333" line-width="25px" line-height="2px" swipeable>
      <van-tab title="详情">
        <detail-tab-one></detail-tab-one>
      </van-tab>
      <van-tab title="目录">
        <detail-tab-two></detail-tab-two>
      </van-tab>
      <van-tab title="评论">
        <detail-tab-three></detail-tab-three>
      </van-tab>
    </van-tabs>

    <loading :show-loading="showLoading"></loading>
  </div>
</template>

<script>
  import headTop from '../../components/common/HeadTop'
  import DetailTabOne from './DetailTabOne'
  import DetailTabTwo from './DetailTabTwo'
  import DetailTabThree from './DetailTabThree'
  import Loading from '../../components/loading/Loading'

  export default {
    data() {
      return {
        comicDetailTop: {},
        active: 1,
        showLoading: true
      }
    },
    components: {
      headTop,
      DetailTabOne,
      DetailTabTwo,
      DetailTabThree,
      Loading
    },
    created() {
      this.http.get("/get-comic-detail-top")
        .then(response => {
          this.comicDetailTop = response;
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
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .detail-top {
    display: flex;
    flex-direction: row;
    margin: 10px 25px;

    .top-cover {
      @include wh(100px, 140px)
    }
    .detail-top-right {
      display: flex;
      margin-left: 25px;
      flex-direction: column;
      justify-content: center;
      .top-header {
        height: 30px;
        display: flex;
        align-items: center;
        .span-title {
          @include sc(18px, $darkGray);
          line-height: 30px;
        }
        .span-score {
          @include wh(24px, 24px);
          border-radius: 12px;
          color: white;
          background: #ff9a6a;
          text-align: center;
          line-height: 24px;
        }
      }
      .header-tag {
        font-size: 14px;
        color: $darkGray;
      }
    }
  }
</style>
