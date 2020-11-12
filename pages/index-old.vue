<template>
  <section class="section">
    <div>
      <button @click="lang = 'pt-BR'">Português</button>
      <button @click="lang = 'en-US'">Inglês</button>
    </div>

    <div :title="description">
      <h1 class="title">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>

    <div v-if="$fetchState.pending">Carregando...</div>
    <div v-else class="columns is-mobile">
      <card
        v-for="post of posts"
        :key="post.id"
        :title="post.title"
        icon="arrange-bring-to-front"
      >
        <p>De: {{ post.author }}</p>
        <p>Preço: {{ post.price | formatCurrency(lang) }}</p>
        <nuxt-link :to="`post/${post._id}`">Leia mais</nuxt-link>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

/**
 * Esta página foi mantida como um exemplo de utilização de filters e computed
 * para mudar dinamicamente textos e formatações de valores a partir de algum
 * data do componente. Neste caso, foi um exemplo relacionado a i18n, mas estas
 * técnicas poderiam ser usadas em qualquer situação reativa parecida.
 */
export default {
  name: 'HomePage',
  components: {
    Card,
  },
  filters: {
    formatCurrency(value, lang) {
      if (lang === 'pt-BR') {
        return 'R$ ' + value.toFixed(2).replace('.', ',')
      } else {
        return '$ ' + value.toFixed(2)
      }
    },
  },
  async fetch() {
    const posts = await this.$axios.$get('posts')
    const users = await this.$axios.$get('users')
    this.posts = posts
      .map((post) => ({
        ...post,
        author: users.find((user) => user._id === post.author).name,
        price: Math.random(),
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  },
  data() {
    return {
      posts: [],
      lang: 'pt-BR',
    }
  },
  computed: {
    title() {
      if (this.lang === 'pt-BR') {
        return 'Meu Site Incrível'
      } else {
        return 'My Incredible Site'
      }
    },

    description() {
      if (this.lang === 'pt-BR') {
        return 'Aqui você encontra tudo sobre qualquer coisa.'
      } else {
        return 'Here you find everything about anything.'
      }
    },
  },
}
</script>
