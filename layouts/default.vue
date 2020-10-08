<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>

          <li v-if="login">
            <a
              href="logout"
              exact-active-class="is-active"
              @click.prevent="logout"
            >
              <b-icon icon="github" /> Sair
            </a>
          </li>
          <li v-else>
            <nuxt-link to="login" exact-active-class="is-active">
              <b-icon icon="github" /> Acessar
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
        {
          title: 'Criar Post',
          icon: 'plus',
          to: { name: 'criar-post' },
        },
      ],
    }
  },
  computed: {
    ...mapState({
      login: (state) => state.user.login,
    }),
  },
  methods: {
    ...mapActions({
      clearUser: 'user/clearUser',
    }),

    logout() {
      this.clearUser()
    },
  },
}
</script>
