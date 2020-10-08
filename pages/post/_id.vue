<template>
  <article v-if="post">
    <h2>{{ post.title }}</h2>
    <strong>De: {{ post.author }}</strong>
    <div v-html="post.content.replace(/\n/g, '<br />')" />
  </article>
  <p v-else>Esta postagem não foi encontrada!</p>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      posts: (state) => state.posts.items,
    }),

    post() {
      const id = parseInt(this.$route.params.id, 10)
      return this.posts.find((item) => item.id === id)
    },
  },
}
</script>
