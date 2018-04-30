<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h1 class="navigation__title">BLACK BELT <span>EAGLE SCOUT</span></h1>
      <div class="navigation__link-list">
        <ul>
          <li>LIVE</li>
          <li>MUSIC</li>
          <li>VIDEO</li>
          <li>BIOGRAPHY</li>
          <li>STORE</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

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
      grid-column-end: 3
      color: black
      letter-spacing: .5px
      font-family: "Helvetica", sans-serif
      padding: 24px 0 0 24px
      span::before
        content: '\A'
        white-space: pre

    &__link-list
      grid-column-start: 8
      padding: 24px 24px 0 0
      ul
        margin: 0
        list-style-type: none
        text-align: right
        font-family: "Helvetica", sans-serif
        letter-spacing: .5px
        font-weight: 800


</style>
