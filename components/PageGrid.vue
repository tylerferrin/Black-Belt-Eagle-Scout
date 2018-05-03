<template>
  <section id="pageGrid" class="page-grid">
    <div class="page-grid__empty-top"></div>
    <div class="page-grid__content-container">
      <div class="page-grid__content-grid">
        <ShowGrid v-if="contentId === 'Show' "/>
        <AlbumGrid v-if="contentId === 'Album' " />
      </div>
      <RouteTitle :routeTitle="routeTitle" />
    </div>
  </section>
</template>
<script>
import ShowGrid from './ShowGrid'
import AlbumGrid from './AlbumGrid'
import RouteTitle from './RouteTitle'
import scroller from 'vue-scrollto'


export default {
  components: {
    ShowGrid,
    AlbumGrid,
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
    width: 100vw
    height: 100%
    padding-bottom: 200px
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

</style>
