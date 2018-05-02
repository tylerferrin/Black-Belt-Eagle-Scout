<template>
  <section
    class="navigation__link-list"
    v-bind:class="{ 'desktop': !this.isMobile, 'mobile': this.isMobile }"
  >
    <ul>
      <li>
        <nuxt-link to="/">
          Tour
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Music
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Video
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Biography
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Contact
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Store
        </nuxt-link>
      </li>
      <button
        v-if="isMobile"
        @click="toggleIsEntering"
        class="mobile-closer"
      >
       X
     </button>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: [
    'toggleIsEntering'
  ],
  computed: mapState([
    'isMobile'
  ])
}

</script>
<style lang="sass">
  .navigation__link-list
    display: block
    grid-column-start: 7
    grid-column-end: 9
    padding: 24px 24px 0 0

    ul
      right: 0
      margin: 0
      padding: 0
      list-style-type: none
      text-align: right
      font-family: "Helvetica", sans-serif
      letter-spacing: .5px
      font-weight: 800
      li
        line-height: 1
        display: block
        margin: 5px 0
        display: block
        &:first-of-type
          margin-top: 0
        a
          color: black
          text-decoration: none
          text-transform: uppercase
  .navigation__link-list.mobile
    position: absolute
    top: 50%
    right: 0
    transform: translate(0%, -50%)
    ul
      li
        margin: 25px 0
        a
          font-size: 20px
  .mobile-closer
    background-color: transparent
    border: none
    outline: none
    font-size: 20px
    font-family: 'Helvetica', sans-serif
    font-weight: 800
    letter-spacing: .5px
    cursor: pointer
    padding-right: 0
    transition: all .5s ease-in-out
    &:active
      transform: rotate(90deg)
</style>
