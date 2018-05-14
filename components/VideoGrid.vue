<template>
  <section class="video-grid">
    <div
      v-for="video in videos"
      class="video-grid__item-wrapper youtube"
      :key="video.embedKey"
      :data-embed="video.embedKey"
    >
      <div class="video-grid__play-button">PLAY</div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      videos: this.$store.state.videos
    }
  },
  mounted () {
    var youtube = document.querySelectorAll('.youtube')
    for (var i = 0; i < youtube.length; i++) {
      var image = new Image()
      var source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/maxresdefault.jpg'
      image.src = source
      image.addEventListener('load', (function () {
        youtube[ i ].appendChild(image)
      }(i)))

      youtube[i].addEventListener('click', function () {
        var iframe = document.createElement('iframe')
        iframe.setAttribute('frameborder', '0')
        iframe.setAttribute('allowfullscreen', '')
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1')
        this.innerHTML = ''
        this.appendChild(iframe)
      })
    }
  }
}
</script>
<style lang="sass">
  .video-grid
    grid-column-start: 2
    grid-column-end: 8
    padding-top: 20%
    padding-bottom: 20px
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr
    grid-column-gap: 50px
    grid-row-gap: 50px
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr
      padding-top: 100px
    &__item-wrapper
      position: relative
      padding-top: 56.25%
      width: 100%
      background-color: #eaa087
      cursor: pointer
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: auto
      iframe
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    &__play-button
      position: absolute
      top: 50%
      left: 50%
      transform: translate3d( -50%, -50%, 0 )
      z-index: 4
      color: white
      font-family: "Helvetica", sans-serif
      letter-spacing: 2px
      line-height: 1
      background-color: #eaa087
      padding: 12.5px
      border-radius: 50px


</style>
