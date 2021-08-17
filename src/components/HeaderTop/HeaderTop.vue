<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="head_title">
      <span class="head_title_text"></span>
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

</style>
