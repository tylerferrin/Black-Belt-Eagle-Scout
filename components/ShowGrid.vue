<template>
  <section class="show-grid">
    <div
      v-for="(show, index) in this.showArray"
      :key="index"
      class="show-grid__show-item">
      <div class="show-grid__show-info">
        <p class="show-grid__show-date">{{ showDate(show.date) }}</p>
        <p class="show-grid__show-venue">{{ show.venue }}</p>
        <p class="show-grid__show-location">{{ show.location }}</p>
        <div class="show-grid__info-container">
          <p>This is where more info about the show is going to go. like 21+. It's a benefit for elephants and so on and so forth</p>
        </div>
        <div class="show-grid__other-performers-container">
          <p
            class="show-grid__other-performers"
            v-for="(others, index) in show.otherPerformers"
            :key="index"
            >
            - {{ others }}
          </p>

        </div>
      </div>
      <div class="show-grid__button-container">
        <a
          v-if="show.rsvpLink"
          :href="show.rsvpLink"
          target="_blank">
          RSVP
        </a >
        <a
          v-if="show.ticketPurchaseLink"
          :href="show.ticketPurchaseLink"
          target="_blank">
          TICKETS
        </a >
      </div>
    </div>
  </section>
</template>
<script>
import moment from 'moment'

export default {
  data () {
    return {
      showArray: this.$store.state.shows
    }
  },
  methods: {
    showDate(date) {
      return moment(date).format('MM.DD.YYYY')
    }
  }
}
</script>
<style lang="sass">
  .show-grid
    position: relative
    top: 0
    left: 0
    grid-column-start: 2
    grid-column-end: 8
    margin-top: 20%
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-column-gap: 3vw
    grid-row-gap: 3vw
    @media screen and (max-width: 1080px)
      grid-template-columns: 1fr 1fr
      grid-column-start: 3
      grid-column-end: 7
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr
      grid-row-gap: 30px
    &__show-item
      position: relative
      display: flex
      flex-direction: column
      justify-content: space-between
      border-top: 3px solid black
      padding: 7.5px 0
      font-family: "Helvetica", sans-serif
      font-size: 1vw
      @media screen and (max-width: 1080px)
        font-size: 12px
      p
        margin: 0
    &__show-date
      display: block
      padding: 7.5px 0
      color: #51914f
      font-weight: 800
      font-size: 1.5vw
      transition: all .25s ease-in-out
      @media screen and (max-width: 1080px)
        font-size: 20px
    &__show-venue
      font-weight: 800
      text-transform: uppercase
      letter-spacing: 1px
      padding-bottom: 7.5px
    &__show-location
      font-weight: 100
    &__info-container
      margin: 15px 0
      border-top: 1px solid black
      border-bottom: 1px solid black
      padding: 15px 0
    &__other-performers-container
      margin: 15px 0
    &__other-performers
      font-size: 12px
      font-weight: 600
      text-transform: uppercase

      &:first-of-type

    &__button-container
      bottom: 0
      width: 100%
      display: flex
      flex-direction: row
      justify-content: space-between
      margin-top: 15px
      align-self: end
      a
        font-size: .9vw
        color: black
        text-decoration: none
        line-height: 30px
        text-align: center
        width: 45%
        background-color: transparent
        outline: none
        border: 2px solid black
        border-radius: 0
        height: 30px
        transition: all .25s ease-in-out
        cursor: pointer
        @media screen and (max-width: 1080px)
          font-size: 12px
        &:hover
          border: 2px solid #51914f
          background-color: #51914f
          color: white




</style>
