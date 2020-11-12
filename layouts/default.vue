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

        <div class="navbar-item">
          <a
            v-for="locale of availableLocales"
            :key="locale.code"
            href="#"
            class="has-text-light mx-2"
            @click.prevent.stop="setLocale(locale.code)"
          >
            {{ locale.name }}
          </a>
        </div>

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

    <div v-if="messageText" class="notification" :class="messageType">
      <button class="delete" @click="closeNotification"></button>
      {{ messageText }}
    </div>
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
      messageText: (state) => state.messages.message,
      messageType: (state) => state.messages.type,
    }),

    availableLocales() {
      return this.$i18n.locales.filter((l) => l.code !== this.$i18n.locale)
    },
  },
  methods: {
    ...mapActions({
      clearUser: 'user/clearUser',
      showMessage: 'messages/showMessage',
    }),

    logout() {
      this.clearUser()
    },

    closeNotification() {
      this.showMessage(null)
    },

    setLocale(code) {
      this.$i18n.setLocale(code)
    },
  },
  head() {
    const i18n = this.$nuxtI18nSeo()

    return {
      htmlAttrs: {
        ...i18n.htmlAttrs,
      },
      bodyAttrs: {
        class: `color-${this.$i18n.locale}`,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description'),
        },
        ...i18n.meta,
      ],
      link: [...i18n.link],
      title: this.$t('title'),
    }
  },
}
</script>

<style lang="scss">
.color-en {
  --color: #1e56af;
}

.color-pt {
  --color: #246108;
}

.color-es {
  --color: #cc1b1b;
}

.is-active,
.navbar.is-primary {
  background: var(--color) !important;
  color: #fffd !important;

  &:focus,
  &:hover {
    color: #fff !important;
  }
}

a,
.has-text-primary {
  color: var(--color) !important;
}

a:focus,
a:hover {
  color: #333 !important;
}

.navbar.is-primary .navbar-brand > .navbar-item:focus,
.navbar.is-primary .navbar-brand > .navbar-item:hover,
.navbar.is-primary .navbar-brand > .navbar-item.is-active {
  background: #0000000d !important;
}
</style>
