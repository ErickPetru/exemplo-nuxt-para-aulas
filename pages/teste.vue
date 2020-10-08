<template>
  <div>
    <h2>Olá, isso é um teste!</h2>
    <p>Passe o mouse para ver a imagem.</p>

    <div
      class="image-box"
      :class="{ 'with-image': image }"
      @mouseenter="showImage"
      @mouseleave="hideImage"
    ></div>

    <ul>
      <li v-for="day of weekDays" :key="day.id">{{ day.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      image: false,
      weekDays: [
        { id: 1, name: 'seg' },
        { id: 2, name: 'ter' },
        { id: 3, name: 'qua' },
        { id: 4, name: 'qui' },
        { id: 5, name: 'sex' },
      ],
    }
  },
  methods: {
    showImage() {
      this.image = true
    },

    hideImage() {
      this.image = false
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}

.image-box {
  width: 30rem;
  height: 30rem;
  border: 1px solid #ccc;
  background: #ddd;
  margin: auto;
}

.with-image {
  background: url('https://media.giphy.com/media/fUYhyT9IjftxrxJXcE/giphy.gif');
  background-size: cover;
}
</style>
