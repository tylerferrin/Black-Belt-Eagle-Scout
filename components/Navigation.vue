<template>
  <section
    class="navigation"
    >
    <div class="navigation__wrapper">
      <nuxt-link to="/"
        class="navigation__title">
          BLACK BELT EAGLE SCOUT
      </nuxt-link>
      <transition
        name="nav-fade"
        mode="out-in"
        appear
      >
        <NavList
          v-if="!isMobile"
        />
        <Burger
          v-if="isMobile && !isMobileListShowing"
        />
        <MobileNavList
          v-if="isMobileListShowing"
        />
      </transition>
    </div>
  </section>
</template>

<script>
import NavList from './NavList'
import MobileNavList from './MobileNavList'
import Burger from './Burger'
import { mapState } from 'vuex'

export default {
  components: {
    NavList,
    MobileNavList,
    Burger
  },
  data () {
    return {
      isMobileListShowing: false,
    }
  },
  computed: mapState([
    'isMobile'
  ]),

  beforeMount () {
    this.$root.$on(['show-mobile-list', 'closeMobileList'], () => {
      this.isMobileListShowing = !this.isMobileListShowing
    })
  },

  mounted () {
    // create function to get current window width
    this.getInnerWidth = () => window.innerWidth

    // create function to add to resize listener
    this.setIsMobile = (val) => {
      this.$store.commit('setIsMobile', val)
    }

    // create function to set state value for isMobile
    this.checkIfIsMobile = () => {
      this.getInnerWidth() <= 768 ? this.setIsMobile(true) : this.setIsMobile(false)
    }

    // run function to set state - isMobile
    this.checkIfIsMobile()

    // add listener
    window.addEventListener('resize', () => {
      this.checkIfIsMobile()
    })
  }
}
</script>
<style lang="sass">
  .navigation
    position: absolute
    top: 0px
    left: 0
    z-index: 999
    width: 100vw
    height: 50px
    background-color: transparent
    &__wrapper
      position: relative
      width: 100%
      display: grid
      grid-template-columns: repeat(8, calc(100vw / 8))
      grid-template-rows: min-max(50px auto)
    &__title
      z-index: 1000
      display: block
      margin: 0
      grid-column-start: 1
      grid-column-end: 2
      color: black
      text-decoration: none
      font-family: "Helvetica", sans-serif
      font-weight: 600
      font-size: 2.5vw
      letter-spacing: .5px
      line-height: 1
      padding: 24px 0 0 24px
      transition: font-size .25s ease-in
      @media screen and (max-width: 768px)
        font-size: 24px
      span::before
        content: '\A'
        white-space: pre

  // nav-fade transition
  .nav-fade-enter,
  .nav-fade-leave-to
    opacity: 0

  .nav-fade-enter-active,
  .nav-fade-leave-active
    transition: opacity .25s ease-in-out



</style>
