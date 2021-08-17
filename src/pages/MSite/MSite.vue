<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="'aaa'">

    </HeaderTop>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    name: 'MSite',
    data() {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
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
