<template>
  <div class="tab">
    <p class="detail">{{comicDetailTabOne.detail}}</p>
    <p class="recommend-header">骚年们都在看</p>
    <div class="block">
      <div class="block-item" v-for="item in comicDetailTabOne.recommendList">
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
        comicDetailTabOne: {},
      }
    },
    created() {
      this.http.get("/get-comic-detail-tab-one")
        .then(response => {
          this.comicDetailTabOne = response;
        })
        .catch(error => {
          console.log(error)
        })
    },
    components: {
      ComicItem
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .detail {
    margin: 15px 10px;
    @include sc(14px, $darkGray)
  }

  .recommend-header{
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
