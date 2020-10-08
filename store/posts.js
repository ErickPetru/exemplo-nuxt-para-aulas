export const state = () => ({
  items: [],
})

export const mutations = {
  ADD_POST(state, data) {
    state.items.push(data)
  },

  REMOVE_POST(state, id) {
    state.items = state.items.filter((item) => item.id !== id)
  },
}

export const actions = {
  addPost(context, data) {
    context.commit('ADD_POST', data)
  },

  removePost(context, id) {
    context.commit('REMOVE_POST', id)
  },
}
