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
        <NavList v-if="isMobile === false " />
        <Burger v-if="isMobile && !isMobileListShowing" />
      </transition>
      <MobileNavList v-if="isMobileListShowing" />
    </div>
  </section>
</template>

<script>
import NavList from './NavList'
import MobileNavList from './MobileNavList'
import Burger from './Burger'
import scroller from 'vue-scrollto'
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

  methods: {
    scrollDown (element) {
      scroller.scrollTo(element, {
        duration: 500,
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        offset: 0
      })
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
  },

  watch: {
    $route (to, from) {
      if (to.name !== 'index') {
        setTimeout(() => {
          this.scrollDown('.page-grid__content-grid')
        }, 250)
        this.$store.commit('toggleScrollOnMount', false)
      }
    }
  }
}
</script>
<style lang="sass">
  .navigation
    position: fixed
    top: 0px
    left: 0
    z-index: 999
    width: 100%
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
      position: fixed
      width: 100px
      grid-column-start: 1
      grid-column-end: 2
      color: black
      text-decoration: none
      font-family: "Helvetica", sans-serif
      font-weight: 600
      font-size: 2vw
      letter-spacing: .5px
      line-height: 1
      padding: 24px 0 0 24px
      transition: font-size .25s ease-in
      @media screen and (max-width: 768px)
        font-size: 16px
        padding: 16px 0 0 16px
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
