import { createClient } from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
  isMobile: null,
  page: null,
  shows: []
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
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {

    try {
      let response = await client.getEntries()

      // once response has come in....
      let filteredResponse = _.map(response.items, item => Object.assign({}, item.fields, item.sys.contentType.sys))
      let shows = _.filter(filteredResponse, item => item.id === 'show')
      commit('setShows', shows)

    } catch(e) {
      console.log(e)
    }

  }
}
