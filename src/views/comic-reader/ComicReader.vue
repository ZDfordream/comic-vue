<template>
    <div>
      <img v-lazy="item" v-for="item in readerResources.comicPictureList" :key="item"/>
      <loading :show-loading="showLoading"></loading>
    </div>
</template>

<script>
  import Loading from '../../components/loading/Loading'

  export default {
    data() {
      return {
        readerResources: {},
        showLoading: true
      }
    },
    components: {
      Loading
    },
    created() {
      this.http.get("/comic-reader-image-resource")
        .then(response => {
          this.readerResources = response;
          console.log(response)
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
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
  img{
    width: 100%;
  }

</style>
