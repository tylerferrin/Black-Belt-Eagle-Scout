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
    margin: 0
    width: 100vw
    overflow-x: hidden
  .default-layout
    width: 100vw
    height: 100vh
    position: relative
    background-image: url('~/assets/bbes_index.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    transition: all .1s ease-in

    &::after
      content: ' '
      position: absolute
      top: 0
      left: 0
      height: 100vh
      width: 100vw
      background-color: #51914f
      opacity: .5

</style>
