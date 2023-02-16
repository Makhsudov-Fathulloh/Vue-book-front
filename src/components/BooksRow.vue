<template>

  <div class="row">
    <div
        v-for="book of getBooks"
        :key="book.id"
        class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
    >
      <div class="card">
        <img src="../../public/image/harry.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5
              v-if="book.name.length > 8"
              class="card-title"
              @click="showMore"
          >
            <span v-if="show">{{ book.name.slice(0, 9) + '...' }}</span>
            <span v-else>{{ book.name }}</span>
          </h5>
          <h5
              v-else
              class="card-title"
          >
            {{ book.name }}
          </h5>
          <p class="card-text">{{ book.description.slice(0, 50) + ' ...' }}</p>
          <div class="d-flex justify-content-between">
              <router-link :to="'/book-info/' + book.id" class="btn btn-sm btn-primary">Batafsil</router-link>
              <router-link :to="'/edit-book/' + book.id" class="btn btn-sm btn-success">O'zgartirish</router-link>
          </div>
          <div class="text-end">
            <button class="btn btn-sm btn-danger mt-4" @click="removeBook(book.id)">O'chirish</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BooksRow",
  data() {
    return {
      show: true
    }
  },

  computed: {
    ...mapGetters(['getBooks'])
  },

  methods: {
    ...mapActions(['fetchBooks', 'deleteBook']), // ushbu sahifaga kirganimizda fetchBooks chaqirilsin
    showMore() {
      this.show = !this.show
    },
    removeBook(bookId) {
      this.deleteBook(bookId)
          .then(() => {
            alert("Kitob o'chirildi")
            this.fetchBooks()
          })
    }

  },

  watch: { // kuzatib turuvchi
    '$route.params.id'() {
      this.fetchBooks(this.$route.params.id) // URL dagi id
    }
  },

  mounted() {
    console.log('mounted')
    console.log(this.getBooks, 'kitoblar')
    this.fetchBooks() // ushbu sahifaga kirganimizda backenddagi kitoblar kelsin
  }
}
</script>

<style scoped>

</style>

