<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h1 class="navigation__title">BLACK BELT EAGLE SCOUT</h1>
      <NavList />
    </div>
  </section>
</template>

<script>
import NavList from './NavList'

export default {
  components: {
    NavList
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
      margin: 0
      grid-column-start: 1
      grid-column-end: 2
      color: black
      font-family: "Helvetica", sans-serif
      font-size: 2.5vw
      letter-spacing: .5px
      padding: 24px 0 0 24px
      transition: font-size .25s ease-in
      @media screen and (max-width: 768px)
        font-size: 24px
      span::before
        content: '\A'
        white-space: pre


</style>
