<template>
  <div v-if="$fetchState.pending">Carregando...</div>
  <article v-else-if="post">
    <h2>{{ post.title }}</h2>
    <strong>{{ $t('from') }}: {{ post.author }}</strong>
    <div v-html="post.content.replace(/\n/g, '<br />')" />
  </article>
  <p v-else>Esta postagem não foi encontrada!</p>
</template>

<script>
export default {
  async fetch() {
    const post = await this.$axios.$get(`posts/${this.$route.params.id}`)
    const user = await this.$axios.$get(`users/${post.author}`)
    post.author = user.name
    this.post = post
  },
  data() {
    return {
      post: null,
    }
  },
  head() {
    if (!this.post) return

    return {
      title: this.post.title,
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.post.author,
        },
      ],
    }
  },
}
</script>
