<template>
  <section class="section">
    <div class="columns is-mobile">
      <card v-for="post of posts" :key="post.id" :title="post.title">
        <p>De: {{ post.author }}</p>
        <nuxt-link :to="`post/${post.id}`">Leia mais</nuxt-link>
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
import { mapState } from 'vuex'
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.items,
    }),
  },
}
</script>
