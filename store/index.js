import { createClient } from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
  isMobile: null,
  page: null,
  scrollOnMount: true,
  shows: [],
  albums: [],
  videos: [],
  bio: {},
  contact: {}
})

export const mutations = {
  setIsMobile (state, isMobile) {
    state.isMobile = isMobile
  },
  setPage (state, page) {
    state.page = page
  },
  setShows (state, shows) {
    state.shows = shows
  },
  toggleScrollOnMount (state, scroll) {
    state.scrollOnMount = scroll
  },
  setAlbums (state, albums) {
    state.albums = albums
  },
  setBio (state, bio) {
    state.bio = bio
  },
  setContact (state, contact) {
    state.contact = contact
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {

      let response = await client.getEntries()
        .catch(e => console.log(e))

      // once response has come in....
      let filteredResponse = _.map(response.items, item => Object.assign({}, item.fields, item.sys.contentType.sys))

      let shows = _.orderBy(_.filter(filteredResponse, item => item.id === 'show'), 'date')
      let albums = _.filter(filteredResponse, item => item.id === 'album')
      let bio = _.filter(filteredResponse, item => item.id === 'bio')
      let contact = _.filter(filteredResponse, item => item.id === 'contact')

      commit('setContact', contact[0])
      commit('setBio', bio[0])
      commit('setAlbums', albums)
      commit('setShows', shows)
  }
}
