<template>
  <section id="pageGrid" class="page-grid">
    <div class="page-grid__empty-top"></div>
    <div
      class="page-grid__content-container"
      v-bind:class="{ 'contact-background': contentId === 'Contact' }"
    >
      <div class="page-grid__content-grid">
        <ShowGrid v-if="contentId === 'Show' "/>
        <AlbumGrid v-if="contentId === 'Album' " />
        <BioGrid v-if="contentId === 'Bio' " />
        <ContactGrid v-if="contentId === 'Contact' " />
      </div>
      <RouteTitle :routeTitle="routeTitle" />
    </div>
  </section>
</template>
<script>
import ShowGrid from './ShowGrid'
import AlbumGrid from './AlbumGrid'
import BioGrid from './BioGrid'
import ContactGrid from './ContactGrid'
import RouteTitle from './RouteTitle'
import scroller from 'vue-scrollto'


export default {
  components: {
    ShowGrid,
    AlbumGrid,
    BioGrid,
    ContactGrid,
    RouteTitle
  },

  props: [
    'contentId'
  ],

  data () {
    return {
      routeTitle: this.$route.name.split('')
    }
  },

  methods: {
    scrollDown (element) {
      scroller.scrollTo(element, {
        duration: 500,
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        offset: 0,
        onDone: () => {
          console.log('done')
        }
      })
    }
  },

  mounted () {
    if (this.$store.state.scrollOnMount) {
      this.scrollDown('.page-grid__content-container')
    }
  }
}
</script>
<style lang="sass">
  .page-grid
    width: 100%
    height: 100%
    &__empty-top
      position: relative
      height: 100vh
    &__content-container
      min-height: 100vh
    &__content-grid
      display: grid
      grid-template-columns: repeat(8, calc(93vw / 8))
      grid-gap: 1vw
      h1
        grid-column-start: 2

  .contact-background
    position: absolute
    height: 100%
    background-image: url('~/assets/bbes_contact.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: left
    z-index: -2
    &::after
      content: ' '
      position: absolute
      top: 0
      left: 0
      height: 100%
      width: 100%
      background-color: #fff
      opacity: .25
      z-index: -1
</style>
