export const state = () => ({
  isMobile: null,
  page: null
})

export const mutations = {
  setIsMobile (state, isMobile) {
    state.isMobile = isMobile
  },
  setPage (state, page) {
    state.page = page
  }
}

export const actions = {

}
