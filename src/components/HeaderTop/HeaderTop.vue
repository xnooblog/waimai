<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    name: 'HeaderTop',
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="sheetstyle/stylus">
  .header
    position fixed
    left 0
    top 0
    width 100%
    height 45px
    background-color #02A774
    z-index 1000
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      left 50%
      top 50%
      width 50%
      transform translate(-50%, -50%)
      color #fff
      text-align center
      .header_title_text
        display block
        font-size 20px
        color #fff
    .header_login
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
