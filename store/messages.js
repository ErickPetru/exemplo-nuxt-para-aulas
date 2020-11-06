// state
export const state = () => ({
  message: '',
  type: '',
})

// mutations
export const mutations = {
  SHOW_MESSAGE(state, payload) {
    if (payload) {
      state.message = payload.message
      state.type = payload.type
    } else {
      state.message = ''
      state.type = ''
    }
  },
}

// actions
export const actions = {
  showMessage(context, payload) {
    context.commit('SHOW_MESSAGE', payload)

    if (payload) {
      setTimeout(() => {
        context.commit('SHOW_MESSAGE', null)
      }, 5000)
    }
  },
}
