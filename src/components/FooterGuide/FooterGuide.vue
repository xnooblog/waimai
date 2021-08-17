<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: isCurrent('/msite')}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide_item" :class="{on: isCurrent('/search')}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{on: isCurrent('/order')}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item" :class="{on: isCurrent('/profile')}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="sheetstyle/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    // 导航栏上边框
    top-border-1px(#e4e4e4)
    display flex
    position fixed
    left 0
    right 0
    bottom 0
    width 100%
    height 50px
    .guide_item
      display flex
      flex 1
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        margin-top 2px
        margin-bottom 2px
        font-size 12px
        .iconfont
          font-size 22px
</style>
