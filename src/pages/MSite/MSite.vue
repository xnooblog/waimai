<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="/login">
        <span class="header_login_text">
          登录|注册
        </span>
      </router-link>
    </HeaderTop>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    name: 'MSite',
    data() {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com',
        address: {
          name: '北京市昌平区337省道'
        }
      }
    },
    computed: {

    },
    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="sheetstyle/stylus">

</style>
