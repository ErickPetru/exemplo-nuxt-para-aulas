<template>
  <section class="section">
    <div>
      <h1 class="title">{{ $t('title') }}</h1>
      <p>{{ $t('description') }}</p>
    </div>

    <div v-if="$fetchState.pending">Carregando...</div>
    <div v-else class="columns is-mobile">
      <card
        v-for="post of posts"
        :key="post.id"
        :title="post.title"
        icon="arrange-bring-to-front"
      >
        <p>{{ $t('from') }}: {{ post.author }}</p>
        <p>{{ $t('price') }}: {{ $n(post.price, 'currency') }}</p>
        <p>{{ $t('createdAt') }}: {{ $d(post.createdAt, 'short') }}</p>
        <nuxt-link :to="`post/${post._id}`">{{ $t('readMore') }}</nuxt-link>
      </card>
    </div>

    <p>{{ $tc('numberOfPosts', posts.length, { count: posts.length }) }}.</p>
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
        price: Math.random() * 10000,
        createdAt: new Date(),
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
