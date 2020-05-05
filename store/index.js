export const state = () => ({
  isLogin: false,
  username: '',
  token: '',
  activeIndex: 0,
  categories: []
})

export const mutations = {
  setLogin (state, isLogin) {
    state.isLogin = isLogin
  },
  setToken (state, token) {
    state.token = token
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
