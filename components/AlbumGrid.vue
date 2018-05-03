<template>
  <section class="album-grid">
    <div class="album-grid__album-container">
      <iframe
      style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=2073508943/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
      seamless
      >
    </iframe>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="sass">
  .album-grid
    grid-column-start: 2
    grid-column-end: 8
    margin-top: 20%
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr
</style>
