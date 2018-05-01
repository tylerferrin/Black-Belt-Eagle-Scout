<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <nuxt-link to="/"
        class="navigation__title">
          BLACK BELT EAGLE SCOUT
      </nuxt-link>
      <NavList v-if="!this.isMobile"/>
      <Burger v-if="this.isMobile"/>
    </div>
  </section>
</template>

<script>
import NavList from './NavList'
import Burger from './Burger'
import { mapState } from 'vuex'

export default {
  components: {
    NavList,
    Burger
  },
  computed: mapState([
    'isMobile'
  ])
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


</style>
