<template>
  <section class="page-grid__route-title">
    <ul>
      <li
        v-for="(letter, index) in routeTitle"
        :key="index"
      >
        {{ letter }}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: [
    'routeTitle'
  ]
}
</script>
<style lang="sass">
  .page-grid__route-title
    position: fixed
    z-index: 1000
    bottom: 0
    animation-name: fade-in
    animation-duration: 1s
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1)
    ul
      margin: 0
      padding: 0
      list-style-type: none
      padding: 0 0 2vw 2vw
      @media screen and (max-width: 768px)
        padding: 0 0 16px 16px
      li
        font-family: "Helvetica", sans-serif
        font-size: 24px
        font-weight: 800
        text-transform: uppercase
        margin: 5px 0
        text-align: center
        @media screen and (max-width: 768px)
          font-size: 16px


  @keyframes fade-in
    0%
      transform: translate3d(-100%, 0, 0)
      opacity: 0
    100%
      transform: translate3d(0, 0, 0)
      opacity: 1
</style>
