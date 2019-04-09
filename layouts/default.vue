<template>
  <div class="default-layout">
    <Navigation />
    <nuxt/>
  </div>
</template>
<script>
import Navigation from '../components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="sass">
  html,
  body
    position: relative
    margin: 0
    width: 100%
  .default-layout
    height: 100vh
    position: relative
    background-image: url('~/assets/bbes_tropical.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: top
    transition: all .1s ease-in

    &::after
      content: ' '
      position: absolute
      top: 0
      left: 0
      height: 100vh
      width: 100%
      background-color: #fff
      opacity: .5

</style>
