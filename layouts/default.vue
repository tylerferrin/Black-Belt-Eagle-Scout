<template>
  <div class="default-layout">
    <div class="">
      <Navigation />
    </div>
    <div class="">
      <nuxt/>

    </div>
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
    width: 100%
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
      width: 100%
      background-color: #eaa087
      opacity: .5

</style>
