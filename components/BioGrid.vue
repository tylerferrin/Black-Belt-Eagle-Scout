<template>
  <section class="bio-grid">
    <div class="bio-grid__bio-text">
      <p class="title">BLACK BELT EAGLE SCOUT</p>
      <div class="text"></div>
    </div>
    <div class="bio-grid__bio-photo">
      <img
        src="~/assets/WR_BBES_BIO.jpg"
        alt="Katherine Paul, AKA Black Belt Eagle Scout">
    </div>
  </section>
</template>
<script>
import marked from 'marked'

export default {
  mounted () {
    let bioText = document.querySelector('.bio-grid__bio-text .text')
    bioText.innerHTML = marked(this.$store.state.bio.bioText)
 }
}
</script>
<style lang="sass">
  .bio-grid
    grid-column-start: 2
    grid-column-end: 8
    margin-top: 20%
    padding-bottom: 100px
    width: 100%
    position: relative
    display: grid
    grid-template-columns: 1fr 1fr
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr
      grid-row-gap: 100px

    &__bio-photo
      width: 42vw
      position: relative
      @media screen and (max-width: 768px)
        grid-row-start: 2
        justify-self: center
        height: 100%
        width: 100%
      img
        position: absolute
        top: 3.5vw
        width: 100%
        height: auto

    &__bio-text
      font-family: "Helvetica"
      @media screen and (max-width: 768px)
        position: relative
        grid-row-start: 1

      .title
        position: absolute
        text-align: center
        top: -30px
        margin: 0
        font-size: 5vw
        font-weight: 800
        letter-spacing: 2px
        @media screen and (max-width: 768px)
          position: relative
          display: none
        &::after
          content: ''
          position: absolute
          top: -25px
          left: -3%
          z-index: -1
          width: 110%
          height: 110vh
          background-color: #eaa087
      .text
        position: absolute
        top: 5vw
        left: 2.5vw
        width: 50%
        padding-top: 40px
        z-index: 2
        margin-bottom: 100px
        @media screen and (max-width: 768px)
          position: relative
          top: 0
          left: 0
          width: 100%
          margin-bottom: 0
          padding-top: 60px
          text-align: justify
        p
          font-size: 14px
          letter-spacing: .5px
          line-height: 1.25
          text-align: justify
          strong
            font-size: 20px




        &::after
          content: ''
          position: absolute
          top: 0
          left: -5%
          z-index: -1
          width: 110%
          height: 110%
          border: 2px solid black
          background-color: lighten(grey, 50%)
          opacity: .9
          @media screen and (max-width: 768px)
            display: none




</style>
