<template>
  <div class="tab">
    <p class="update-time">{{comicDetailTabTwo.updateTime}}</p>
    <div class="category">
      <div v-for="item in comicDetailTabTwo.categoryList" :key="item" class="category-item" @click="readComic()">
        {{item}}
      </div>
    </div>
    <div class="read-more">{{comicDetailTabTwo.actionName}}</div>
    <p class="recommend-header">骚年们都在看</p>
    <div class="block">
      <div class="block-item" v-for="item in comicDetailTabTwo.recommendList">
        <comic-item :item="item"></comic-item>
      </div>
    </div>
  </div>
</template>

<script>
  import ComicItem from '../../components/mine/ComicItem'

  export default {
    data() {
      return {
        comicDetailTabTwo: {},
      }
    },
    created() {
      this.http.get("/get-comic-detail-tab-two")
        .then(response => {
          this.comicDetailTabTwo = response;
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      readComic() {
        this.$router.push({path: `/comic-reader/${this.randomRange(1, 100)}`})
      },
      randomRange(min, max) { // min最小值，max最大值
        return Math.floor(Math.random() * (max - min)) + min;
      }
    },
    components: {
      ComicItem
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .update-time {
    margin: 15px 10px;
    @include sc(14px, $darkGray)
  }

  .category {
    display: flex;
    flex-flow: row wrap;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
    .category-item {
      @include wh(100px, 50px);
      @include childInCenter;
      margin-bottom: 10px;
      border-radius: 6px;
      border: 1px solid #e5e5e5;
    }
  }

  .read-more {
    margin: 0px 10px 10px;
    height: 50px;
    @include childInCenter;
    border-radius: 6px;
    border: 1px solid #e5e5e5;
  }

  .recommend-header {
    margin-left: 10px;
    margin-bottom: 10px;
    @include sc(14px, $primary)
  }

  .block {
    display: flex;
    flex-flow: row wrap;
    margin-left: 5px;
    margin-right: 5px;
    justify-content: space-around;
  }

</style>
