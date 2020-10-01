// state
export const state = () => ({
  login: '',
  password: '',
})

// mutations
export const mutations = {
  SET_LOGIN(state, login) {
    state.login = login
  },

  SET_PASSWORD(state, password) {
    state.password = password
  },
}

// actions
export const actions = {
  setUser(context, user) {
    context.commit('SET_LOGIN', user.login)
    context.commit('SET_PASSWORD', user.password)
  },

  clearUser(context) {
    context.commit('SET_LOGIN', '')
    context.commit('SET_PASSWORD', '')
  },
}
