<template>
  <section class="navigation__link-list">
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
    </ul>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="sass">
  .navigation__link-list
    grid-column-start: 7
    grid-column-end: 9
    padding: 24px 24px 0 0
    @media screen and (max-width: 768px)
      display: none
    ul
      margin: 0
      padding: 0
      list-style-type: none
      text-align: right
      font-family: "Helvetica", sans-serif
      letter-spacing: .5px
      font-weight: 800
      li
        margin: 5px 0
        a
          color: black
          text-decoration: none
          text-transform: uppercase
</style>
