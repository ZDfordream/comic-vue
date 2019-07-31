<template>
  <div class="tab">
    <div v-for="item in comicDetailTabThree.commentList" class="comment-item">
      <img v-lazy="item.avatar" class="avatar">
      <div class="content">
        <p class="name">{{item.userName}}</p>
        <p class="time">{{item.time}}</p>
        <p class="comment">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comicDetailTabThree: {},
      }
    },
    created() {
      this.http.get("/get-comic-detail-tab-three")
        .then(response => {
          this.comicDetailTabThree = response;
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .comment-item {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-top: 10px;
    .avatar {
      @include wh(30px, 30px);
      border-radius: 15px;
      margin-left: 10px;
    }
    .content {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      width: 100%;
      border-bottom:1px solid #e5e5e5;
      .name {
        @include sc(12px, $primary)
      }
      .time {
        margin-top: 5px;
        @include sc(12px, $lightGray)
      }
      .comment {
        margin-top: 10px;
        @include sc(14px, $darkGray);
        @include singleLine;
        margin-bottom: 10px;
      }
    }
  }

</style>
