<template>
  <section
    class="mobile-nav__list-wrapper"
    v-bind:class="{ 'slideIn': isEntering, 'slideOut': !isEntering }"
  >
    <NavList :toggleIsEntering="toggleIsEntering" />
  </section>
</template>
<script>
import NavList from '~/components/NavList'

export default {
  components: {
    NavList
  },
  data () {
    return {
      isEntering: true,
      toggleIsEntering: () => {
        this.isEntering = false
        setTimeout(() => {
          this.$root.$emit('closeMobileList')
        }, 350)
      }
    }
  },

  methods: {
    preventScroll() {
      let body = document.querySelector('body')
      body.style.overflow = 'hidden'
    },
    enableScroll() {
      let body = document.querySelector('body')
      body.style.overflow = 'visible'
    }
   },

  beforeMount () {
    this.$root.$on('changeMobileNavClass', () => {
      this.isEntering = false
    })
    // prevent scrolling while nav is open
    this.preventScroll()

  },

  beforeDestroy() {
    // re-enable scrolling as nav closes
    this.enableScroll()
  },

  watch: {
    $route (to, from) {
      if (to !== from) {
        this.toggleIsEntering()
      }
    }
  }
}
</script>
<style lang="sass">
  .mobile-nav__list-wrapper
    position: absolute
    top: 0
    left: 100vw
    z-index: 999
    height: 100vh
    width: 100%
    background-color: #eaa087
    opacity: .9
    transition: all .25s ease-in-out

  .slideIn
    animation-name: slideIn
    animation-duration: .25s
    animation-timing-function: ease-in-out
    animation-iteration-count: 1
    animation-direction: normal
    animation-fill-mode: forwards

  .slideOut
    animation-name: slideOut
    animation-duration: .25s
    animation-timing-function: ease-in-out
    animation-iteration-count: 1
    animation-direction: normal
    animation-fill-mode: forwards

  @keyframes slideIn
    0%
      transform: translate3d(0, 0, 0)
    100%
      transform: translate3d(-100vw, 0, 0)

  @keyframes slideOut
    0%
      transform: translate3d(-100vw, 0, 0)
    100%
      transform: translate3d(0, 0, 0)



</style>
