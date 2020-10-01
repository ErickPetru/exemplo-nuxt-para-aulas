<template>
  <form @submit.prevent="loginUser">
    <input v-model="email" type="email" placeholder="E-mail" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button>Acessar</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),

    loginUser() {
      if (
        this.email === 'erick.petrucelli@fatectq.edu.br' &&
        this.password === '123'
      ) {
        this.setUser({
          login: this.email,
          password: this.password,
        })

        this.$router.push('/')
      }
    },
  },
}
</script>
