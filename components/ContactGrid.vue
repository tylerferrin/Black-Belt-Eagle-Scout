<template>
  <section class="contact-grid">
    <div class="contact-grid__booking">
      <a>Booking / <span>Alisa Preisler </span></a>
      <a
        class="link-text"
        :href="`mailto:${contact.bookingContact}`" target="_blank"
      >
        {{contact.bookingContact}}
      </a>

      <a>EU Booking / <span>Chris Meredith</span></a>
      <a
        class="link-text"
        :href="`mailto:${contact.euBookingContact}`" target="_blank"
      >
        {{contact.euBookingContact}}
      </a>

      <a>Label / <span>Saddle Creek</span></a>
      <a
        class="link-text"
        :href="`${contact.labelContact}`" target="_blank"
      >
        {{contact.labelContact}}
      </a>
    </div>

    <div class="contact-grid__info">
      <a>General</a>
      <a
        class="link-text"
        :href="`mailto:${contact.generalContact}`" target="_blank"
      >
        {{contact.generalContact}}
      </a>

      <a>Publicity / <span>Jessica Linker</span></a>
      <a
        class="link-text"
        :href="`mailto:${contact.publicityContact}`" target="_blank">{{contact.publicityContact}}
      </a>

      <a>EU Publicity / <span>James Parrish</span></a>
      <a
        class="link-text"
        :href="`mailto:${contact.euPublicityContact}`" target="_blank">{{contact.euPublicityContact}}
      </a>

      <a
        class="social-text"
        :href="`${contact.instagramURL}`" target="_blank">Instagram
      </a>
      <a
        class="social-text"
        :href="`${contact.facebookURL}`" target="_blank">Facebook
      </a>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      contact: this.$store.state.contact
    }
  }
}
</script>
<style lang="sass">
  .contact-grid
    position: relative
    padding-top: 67px
    grid-column-start: 2
    grid-column-end: 8
    margin-top: 20%
    width: 100%
    display: grid
    grid-column-gap: 50px
    grid-row-gap: 25px
    grid-template-columns: 1fr 1fr 1fr 1fr
    font-family: "Helvetica"
    font-size: .85vw
    text-align: right
    @media screen and (max-width: 1080px)
      font-size: 10px
      grid-template-columns: 1fr 1fr
    @media screen and (max-width: 768px)
      grid-column-start: 3
      grid-column-end: 7
      grid-template-columns: 1fr
    a
      display: block
      padding-bottom: 2.5px
      color: white
      text-transform: uppercase
      text-decoration: none
      font-weight: 800
      letter-spacing: 2px
      position: relative
      @media screen and (max-width: 768px)
        letter-spacing: 1px
        color: black
      @media screen and (max-width: 400px)
        font-size: 10px
      span
        font-weight: 400


    a.link-text
      display: block
      font-weight: 400
      letter-spacing: 2px
      margin: 15px 0 25px 0
      text-transform: lowercase
      border-bottom: 0
      &::after
        position: absolute
        content: ' '
        bottom: -5px
        left: 0
        width: 0
        height: 2px
        background-color: #000
        transition: all .25s ease-in-out
        z-index: -1
      &:hover::after
        width: 100%
    a.social-text
      display: block
      margin: 25px 0
      position: relative
      border-bottom: 0
      &::after
        position: absolute
        content: ' '
        bottom: -5px
        left: 0
        width: 0
        height: 2px
        background-color: #000
        transition: all .25s ease-in-out
        z-index: -1
      &:hover::after
        width: 100%

    &__info
      z-index: 9999
      grid-column-start: 4
      @media screen and (max-width: 1080px)
        grid-column-start: 2
      @media screen and (max-width: 768px)
        grid-column-start: 1

    &__booking
      z-index: 9999
      grid-column-start: 3
      @media screen and (min-width: 1080px)
        margin-top: 71px
      @media screen and (max-width: 1080px)
        grid-column-start: 1
      @media screen and (max-width: 768px)
        grid-column-start: 1


</style>
