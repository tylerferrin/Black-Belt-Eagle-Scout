<template>
  <section>
    <PageGrid :contentId="contentId" />
  </section>
</template>
<script>
import PageGrid from '~/components/PageGrid'

export default {
  scrollToTop: true,
  components: {
    PageGrid
  },

  data () {
    return {
      contentId: 'Bio'
    }
  }
}
</script>
<style lang="sass">
</style>
