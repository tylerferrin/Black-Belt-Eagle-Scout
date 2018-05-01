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
  },
  beforeMount () {

    this.getInnerWidth = () => window.innerWidth

    this.setIsMobile = (val) => {
      this.$store.commit('setIsMobile', val)
    }

    this.checkIfIsMobile = () => {
      this.getInnerWidth() <= 768 ? this.setIsMobile(true) : this.setIsMobile(false)
    }

    this.checkIfIsMobile()

    window.addEventListener('resize', () => {
      this.checkIfIsMobile()
    })
  }
}
</script>

<style lang="sass">
  html,
  body
    margin: 0
    width: 100vw
  .index-view
    width: 100vw
    height: 100vh
    position: relative
    background-image: url('~/assets/bbes_index.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    transition: all .25s ease-in

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
