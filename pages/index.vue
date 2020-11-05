<template>
  <section class="section">
    <div v-if="$fetchState.pending">Carregando...</div>
    <div v-else class="columns is-mobile">
      <card
        v-for="post of posts"
        :key="post.id"
        :title="post.title"
        icon="arrange-bring-to-front"
      >
        <p>De: {{ post.author }}</p>
        <nuxt-link :to="`post/${post._id}`">Leia mais</nuxt-link>
      </card>

      <!-- <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card> -->
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  async fetch() {
    const posts = await this.$axios.$get('posts')
    const users = await this.$axios.$get('users')
    this.posts = posts
      .map((post) => ({
        ...post,
        author: users.find((user) => user._id === post.author).name,
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
