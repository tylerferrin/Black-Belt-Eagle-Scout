<template>
  <section class="burger">
    <button class="burger__btn">
      <div class="burger__row burger__row--one"></div>
      <div class="burger__row burger__row--two"></div>
      <div class="burger__row burger__row--three"></div>
    </button>
  </section>

</template>
<script>
export default {

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
    &__row
      height: 3px
      width: 25px
      background-color: black
      &--one
      &--two
      &--three
</style>
