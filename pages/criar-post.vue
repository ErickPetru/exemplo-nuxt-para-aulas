<template>
  <form @submit.prevent="save">
    <input
      v-model="title"
      type="text"
      placeholder="Título"
      :class="titleClass"
      @input="updatedTitle"
    />
    <select
      v-model="author"
      type="text"
      placeholder="Autor"
      :class="authorClass"
      @input="updatedAuthor"
    >
      <option value="">Autor</option>
      <option v-for="user of users" :key="user._id" :value="user._id">
        {{ user.name }}
      </option>
    </select>
    <textarea
      v-model="content"
      type="text"
      placeholder="Conteúdo"
      :class="contentClass"
      @input="updatedContent"
    />
    <button>Salvar</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async fetch() {
    const users = await this.$axios.$get('users')
    this.users = users.sort((a, b) => a.name.localeCompare(b.name))
  },
  data() {
    return {
      users: [],
      title: '',
      titleClass: '',
      author: '',
      authorClass: '',
      content: '',
      contentClass: '',
    }
  },
  methods: {
    ...mapActions({
      showMessage: 'messages/showMessage',
    }),

    save() {
      if (!this.isValid()) return false

      // await this.$axios.$post('posts', {
      //   title: this.title,
      //   content: this.content,
      //   author: this.author,
      // })

      this.title = ''
      this.author = ''
      this.content = ''

      this.showMessage({
        message: 'Foi incluído com sucesso!',
        type: 'is-success',
      })
    },

    isValid() {
      this.error = ''
      this.titleClass = ''
      this.authorClass = ''
      this.contentClass = ''

      if (!this.title) {
        this.showMessage({
          message: 'O título é obrigatório!',
          type: 'is-danger',
        })
        this.titleClass = 'has-text-danger'
        return false
      }

      if (!this.author) {
        this.showMessage({
          message: 'O autor é obrigatório!',
          type: 'is-danger',
        })
        this.authorClass = 'has-text-danger'
        return false
      }

      if (!this.content) {
        this.showMessage({
          message: 'O conteúdo é obrigatório!',
          type: 'is-danger',
        })
        this.contentClass = 'has-text-danger'
        return false
      }

      return true
    },

    updatedTitle() {
      this.titleClass = ''
      if (!this.title) this.titleClass = 'has-text-danger'
    },

    updatedAuthor() {
      this.authorClass = ''
      if (!this.author) this.authorClass = 'has-text-danger'
    },

    updatedContent() {
      this.contentClass = ''
      if (!this.content) this.contentClass = 'has-text-danger'
    },
  },
}
</script>

<style lang="scss" scoped>
input,
textarea {
  outline: none;
}

.has-text-danger {
  border: 1px solid red;
}
</style>
