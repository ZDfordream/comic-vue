<template>
  <div class="head-top">
    <van-icon v-if="showBackIcon" name="arrow-left" size="20px" class="go-back" @click="goBack"/>
    <span class="title">{{titleName}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      titleName: {
        type: String
      },
      showBackIcon: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .head-top {
    @include wh(100%, 40px);
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e5e5e5;
    .go-back {
      padding: 10px;
      align-self: center;
    }
    .title {
      line-height: 40px;
      text-align: center;
      @include sc(16px, $darkGray);
      @include centerHorizontal;
    }
  }
</style>
