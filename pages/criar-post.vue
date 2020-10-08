<template>
  <form @submit.prevent="save">
    <input
      v-model="title"
      type="text"
      placeholder="Título"
      :class="titleClass"
      @input="updatedTitle"
    />
    <input
      v-model="author"
      type="text"
      placeholder="Autor"
      :class="authorClass"
      @input="updatedAuthor"
    />
    <textarea
      v-model="content"
      type="text"
      placeholder="Conteúdo"
      :class="contentClass"
      @input="updatedContent"
    />
    <button>Salvar</button>

    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      titleClass: '',
      author: '',
      authorClass: '',
      content: '',
      contentClass: '',
      error: '',
    }
  },
  methods: {
    ...mapActions({
      addPost: 'posts/addPost',
    }),

    save() {
      if (!this.isValid()) return false

      this.addPost({
        id: Math.round(Math.random() * 999999),
        title: this.title,
        author: this.author,
        content: this.content,
      })

      this.title = ''
      this.author = ''
      this.content = ''
    },

    isValid() {
      this.error = ''
      this.titleClass = ''
      this.authorClass = ''
      this.contentClass = ''

      if (!this.title) {
        this.error = 'O título é obrigatório!'
        this.titleClass = 'has-text-danger'
        return false
      }

      if (!this.author) {
        this.error = 'O autor é obrigatório!'
        this.authorClass = 'has-text-danger'
        return false
      }

      if (!this.content) {
        this.error = 'O conteúdo é obrigatório!'
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
