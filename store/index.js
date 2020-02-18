export const state = () => ({
  isLogin: false,
  username: '',
  activeIndex: 0,
  categories: []
})

export const mutations = {
  setLogin (state, isLogin) {
    state.isLogin = isLogin
  },
  setUsername (state, username) {
    state.username = username
  },
  setActiveIndex (state, index) {
    state.activeIndex = index
  },
  setCategory (state, categories) {
    state.categories = [...categories]
  }
}
