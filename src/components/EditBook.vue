<template>

  <form class="col-6" @submit.prevent="editBook">
    <div class="mb-3">
      <label for="name" class="form-label">Kitob nomini kiriting</label>
      <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model="form.name"
      >
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Kitob tavsifi</label>
      <input
          type="text"
          class="form-control"
          id="description"
          v-model="form.description"
      >
    </div>

    <div class="mb-3">
      <label for="text" class="form-label">Kitob teksti</label>
      <input
          type="text"
          class="form-control"
          id="text"
          v-model="form.text"
      >
    </div>

    <div class="mb-3">
      <label for="category" class="form-label">Kategoriyasi</label>
      <select
          class="form-select"
          id="category"
          v-model="form.category"
      >
        <option
            :value="'/api/categories/' + category.id"
            v-for="category in getCategories"
            :key="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <button type="submit" class="btn btn-success">O'zgartirish</button>
  </form>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddBook",
  data() {
    return {
      form: {
        id: null,
        name: '',
        description: '',
        text: '',
        category: ''
      }
    }
  },

  computed: {
    ...mapGetters(['getOneBook', 'getCategories'])
  },

  methods: {
    ...mapActions(['putBook', "fetchBook"]),

    editBook() {
      this.putBook(this.form)
          .then(() => {
            alert("Kitob muvaffaqiyatli o'zgartirildi")
            this.$router.push('/')
          })
    }
  },

  mounted() {
      console.log(this.$route.params.bookId, 'bu route params')

    this.fetchBook(this.$route.params.bookId)
        .then(() => {
          this.form.id = this.getOneBook.id
          this.form.name = this.getOneBook.name
          this.form.description = this.getOneBook.description
          this.form.text = this.getOneBook.text
          this.form.category = this.getOneBook.category['@id']
        })
  }
}
</script>

<style scoped>

</style>