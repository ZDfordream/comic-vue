<template>
  <scroll :top="0"
          :bottom="48"
          @onScroll="onScroll"
          ref="scroll">
    <div class="user-center">
      <div class="user-block">
        <img v-lazy="avatar" class="avatar"/>
        <div class="user-info">
          <div>
            <span class="user-name">凯特琳</span>
            <span class="waiting-complete">(待完善)</span>
          </div>
          <div class="user-assets">
            <div class="assets-item">
              <p class="assets-number">0.0</p>
              <p class="assets-name">书豆余额</p>
            </div>
            <div class="assets-item">
              <p class="assets-number">0</p>
              <p class="assets-name">书券(张)</p>
            </div>
            <div class="assets-item">
              <p class="assets-number">0</p>
              <p class="assets-name">月票</p>
            </div>
          </div>
        </div>
      </div>
      <div class="update-today-right-item" v-for="item in itemList">
        <user-center-item :iconString="item.icon" :itemName="item.title"></user-center-item>
      </div>
    </div>
    <loading :show-loading="showLoading"></loading>
  </scroll>
</template>

<script>
  import UserCenterItem from '../../components/mine/UserCenterItem'
  import Scroll from '../../components/scroll/Scroll'
  import Loading from '../../components/loading/Loading'

  export default {
    data() {
      return {
        avatar: "https://tianyue.oss-cn-hangzhou.aliyuncs.com/comic-user-center/sky.jpeg",
        itemList: [],
        currentY: 0,
        showLoading: true
      }
    },
    components: {
      UserCenterItem,
      Scroll,
      Loading
    },
    created() {
      this.http.get("/get-user-center-item")
        .then(response => {
          this.itemList = response.data;
          setTimeout(() => {
            this.showLoading = false;
          }, 400)
        })
        .catch(error => {
          console.log(error)
          setTimeout(() => {
            this.showLoading = false;
          }, 400)
        })
    },
    methods: {
      onScroll(offsetY) {
        this.currentY = offsetY;
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.currentY)
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .user-center {
    display: flex;
    flex-direction: column;
    .user-block {
      display: flex;
      flex-direction: row;
      margin: 10px 15px;
      align-items: center;
      .avatar {
        @include wh(70px, 70px);
        border-radius: 35px;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 70px;
        margin-left: 30px;
        .user-name {
          @include sc(18px, $mediumGray);
          font-weight: 500;
        }
        .waiting-complete {
          @include sc(14px, $primary);
          margin-left: 15px;
        }
        .user-assets {
          display: flex;
          flex-direction: row;
          .assets-item {
            margin-right: 20px;
            .assets-number {
              @include sc(15px, $darkGray);
              font-weight: 700;
            }
            .assets-name {
              margin-top: 3px;
              @include sc(12px, $lightGray);
            }
          }
        }
      }
    }
  }
</style>
