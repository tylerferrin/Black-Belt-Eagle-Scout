<template>
  <section class="album-grid">
    <div
      v-for="album in albums"
      :key="album.orderToDisplay"
      class="album-grid__album-container"
    >
      <div class="album-grid__album-item">
        <div class="iframe-wrapper">
          <iframe
          :src="album.embedLink"
          seamless
          />
        </div>
      </div>
      <div class="album-grid__album-info">
        <p class="title">{{album.title}}</p>
        <br>
        <p class="release-date"><span>released on</span> {{dateFormat(album.releaseDate)}}</p>
        <p class="label"><span>released by</span> {{album.label}}</p>
        <p class="available">Available on DIGITAL or ANALOG formats</p>
        <div class="purchase-links">
          <p>
            <a
              :href="album.spotifyLink"
              target="_blank"
            >
              SPOTIFY
            </a>
          </p>
          <p>
            <a
              :href="album.itunesLink"
              target="_blank"
            >
              APPLE MUSIC
            </a>
          </p>
          <p>
            <a
              :href="album.vinylLink"
              target="_blank"
            >
              VINYL
            </a>
          </p>
          <p>
            <a
              :href="album.cassetteLink"
              target="_blank"
            >
              CASSETTE
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import moment from 'moment'
import marked from 'marked'

export default {
  data () {
    return {
      albums: this.$store.state.albums
    }
  },
  methods: {
    dateFormat(date) {
      return moment(date).format('MM.DD.YYYY')
    }
  }
}
</script>
<style lang="sass">
  .album-grid
    grid-column-start: 2
    grid-column-end: 8
    margin-top: 20%
    width: 100%
    display: grid
    grid-template-columns: 1fr
    @media screen and (max-width: 768px)
      grid-column-start: 3
      grid-column-end: 7
    &__album-container
      display: grid
      grid-template-columns: 1fr 1fr
      grid-column-gap: 5vw
      grid-row-gap: 100px
      @media screen and (max-width: 1080px)
        grid-template-columns: 1fr

    &__album-item
      width: 25vw
      height: 25vw
      @media screen and (max-width: 1080px)
        height: 50vw
        width: 50vw
      .iframe-wrapper
        height: 100%
        width: 100%
        iframe
          height: 100%
          width: 100%
          border: 0

    &__album-info
      text-align: right
      font-family: "Helvetica", sans-serif
      letter-spacing: .5px
      position: relative
      &::before
        content: ' '
        width: 100%
        height: 75%
        position: absolute
        top: 10%
        left: 10%
        background-color: grey
        opacity: .2


      p
        margin: 0

      .title
        position: relative
        display: inline-block
        font-size: 2vw
        font-weight: 800
        text-transform: uppercase
        line-height: 1
        @media screen and (max-width: 1080px)
          font-size: 24px
        &::after
          content: ' '
          position: absolute
          z-index: -1
          top: -50%
          left: -5%
          height: 25px
          width: 110%
          opacity: 1
          background-color: #eaa087
          @media screen and (max-width: 768px)
            top: -25%

      .release-date,
      .label
        position: relative
        font-weight: 800
        margin-top: 12px
        span
          font-weight: 100
          font-size: 10px

      .available
        position: relative
        font-weight: 800
        font-size: 16px
        margin-top: 24px
        border-bottom: 2px solid black
        line-height: 1
        &::after
          content: ' '
          position: absolute
          z-index: -1
          top: 12px
          left: 39%
          height: 8px
          width: 65%
          opacity: 1
          background-color: #eaa087

      .purchase-links
        p
          margin: 15px 0
          a
            position: relative
            color: black
            text-decoration: none
            font-weight: 100
            letter-spacing: 2px
            &::after
              content: ' '
              position: absolute
              z-index: -1
              top: 8px
              left: 0%
              height: 8px
              width: 0%
              opacity: 1
              background-color: #eaa087
              transition: all .25s ease-in-out
            &:hover::after
              width: 100%





</style>
