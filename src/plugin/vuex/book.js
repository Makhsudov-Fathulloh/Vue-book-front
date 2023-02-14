import axios from "@/plugin/vuex/axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) { // Promise. Kitoblarni olish actionsi
            let categoryUrl = ''

            if (categoryId) {
                categoryUrl = '?category=' + categoryId
            }

            return new Promise((resolve, reject) => {
                axios.get( 'http://localhost:8505/api/books' + categoryUrl)
                    .then((response) => { // .then true kelganda
                        console.log('Kitoblar olindi')
                        console.log(response)

                        let books = {  // backendka tog'rilab qoyamiz
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        // Mutationsni toldiramiz
                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch((error) => { // .catch false kelganda
                        console.log('Kitoblar olishda xatolik')
                        console.log(error)
                        reject()
                    })
            })
        },

        pushBook(context, data) { // Kiton q'oshish actionsi
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/books', data)
                    .then((response) => { // .then true kelganda
                        console.log("Kitob q'oshildi")
                        console.log(response)

                        // Mutationsni toldiramiz
                        context.commit('updateBook', response.data) // backandka qoshish
                        resolve()
                    })
                    .catch((error) => { // .catch false kelganda
                        console.log("Kitob q'oshishda xatolik")
                        reject()
                    })
            })
        },

        fetchBook(context, bookId) { // Promise. Kitobni olish actioni
            return new Promise((resolve, reject) => {
                axios.get( 'http://localhost:8505/api/books/' + bookId)
                    .then((response) => { // .then true kelganda
                        console.log('Kitob olindi')
                        console.log(response)

                        let book = {  // backendka tog'rilab qoyamiz
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            category: response.data.category
                        }

                        // Mutationsni toldiramiz
                        context.commit('updateOneBook', book)
                        resolve()
                    })
                    .catch((error) => { // .catch false kelganda
                        console.log('Kitob olishda xatolik')
                        console.log(error)
                        reject()
                    })
            })
        },

    },
    mutations: {
        updateBooks(state, books) {
            state.books = books // mutations orqali state ga joylashyapti
        },

        updateBook(state, book) {
            state.book = book
        },

        updateOneBook(state, book) {
            state.oneBook = book
        }

    },
    state: {
        books: {
            models: [], // "hydra:member":
            totalItems: 0, // "hydra:totalItems":
        },

        book: {
            name: null,
            description: null,
            text: null,
            category: null
        },

        oneBook: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null
        }
    },
    getters: {
        getBooks(state) {
            return state.books.models // state dagi books qaytarsin
        },

        getBook(state) {
            return state.book
        },

        getOneBook(state) {
            return state.oneBook
        }

    }
}