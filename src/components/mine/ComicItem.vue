<template>
  <div class="block-item-wrapper" @click.stop.prevent="selectComic(item)">
    <img v-lazy="item.cover">
    <p class="name">{{item.title}}</p>
    <p class="name">{{item.description}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      selectComic(item) {
        this.$router.push({path: `/comic-detail/${this.randomRange(1, 100)}`})
      },

      randomRange(min, max) { // min最小值，max最大值
        return Math.floor(Math.random() * (max - min)) + min;
      }
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
    width: 110px;
    background-color: white;
    border-radius: 8px;
    img {
      @include wh(100%, 130px);
      margin-bottom: 3px;
      border-radius: 8px 8px 0 0;
    }
    p {
      width: 100%;
      text-align: center;
      @include singleLine;
      color: $lightGray;
      margin-bottom: 3px;
    }
  }

</style>
