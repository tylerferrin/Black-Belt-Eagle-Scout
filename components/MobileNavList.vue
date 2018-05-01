<template>
  <section class="mobile-nav__list-wrapper">
    <NavList />
  </section>
</template>
<script>
import NavList from '~/components/NavList'

export default {
  components: {
    NavList
  }
}
</script>
<style lang="sass">
  .mobile-nav__list-wrapper
    position: absolute
    top: 0
    left: 0
    z-index: 999
    height: 100vh
    width: 100vw
    background-color: #51914f
    opacity: .7
    animation-name: slideIn
    animation-duration: .5s
    animation-timing-function: ease-in-out
    animation-iteration-count: 1
    animation-direction: normal

  @keyframes slideIn
    0%
      transform: translate3d(100vw, 0, 0)
    100%
      transform: translate3d(0, 0, 0)



</style>
