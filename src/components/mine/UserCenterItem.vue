<template>
  <div class="content">
    <div class="user-center-item">
      <img v-lazy="iconString" class="icon">
      <div class="user-center-item-right">
        <p>{{itemName}}</p>
        <van-icon name="arrow" size="15px"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      iconString: {
        type: String
      },
      itemName: {
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .content {
    display: flex;
    flex-direction: column;
    .user-center-item {
      display: flex;
      align-items: center;
      margin: 0px 15px;
      height: 45px;
      .icon {
        @include wh(20px, 20px);
      }
      .user-center-item-right {
        margin-left: 20px;
        border-bottom: $dividerColor;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        p {
          @include sc(16px, $mediumGray);
        }
      }
    }
  }
</style>
