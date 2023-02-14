<template>

  <h1 class="mb-4">{{ getOneBook.name }}</h1>
  <p>{{ getOneBook.text }}</p>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BookInfoPage",
  computed: {
    ...mapGetters(['getOneBook'])
  },
  methods: {
    ...mapActions(['fetchBook'])
  },
  mounted() {
    this.fetchBook(this.$route.params.bookId)
  }
}
</script>

<style scoped>

</style>