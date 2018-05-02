<template>
  <section class="burger">
    <button
      @click="toggleMobileNav"
      class="burger__btn" >
      <div class="burger__row burger__row--one"></div>
      <div class="burger__row burger__row--two"></div>
      <div class="burger__row burger__row--three"></div>
    </button>
  </section>

</template>
<script>
export default {
  methods: {
    toggleMobileNav() {
      this.$root.$emit('show-mobile-list')
    }
  }
}
</script>
<style lang="sass">
  .burger
    position: absolute
    top: 0
    right: 0
    grid-column-start: 8
    grid-column-end: 9
    padding: 24px 24px 0 0
    &__btn
      display: block
      position: relative
      height: 20px
      width: 30px
      display: flex
      flex-direction: column
      justify-content: space-between
      background-color: transparent
      border-radius: none
      outline: none
      border: none
      cursor: pointer
      transition: all .25s ease-in-out
      &:active
        transform: translate3d(0, 5px, 0)
    &__row
      display: block
      height: 3px
      width: 25px
      background-color: black
      &--one
      &--two
      &--three
</style>
