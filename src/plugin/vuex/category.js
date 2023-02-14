import axios from "@/plugin/vuex/axios";

export default {
    actions: {
        fetchCategories(context) { // Promise
            return new Promise((resolve, reject) => {
                axios.get( 'http://localhost:8505/api/categories')
                    .then((response) => { // .then true kelganda
                        console.log('Janarlar olindi')
                        console.log(response)

                        let categories = {  // backendka tog'rilab qoyamiz
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        // Mutationsni toldiramiz
                        context.commit('updateCategories', categories)
                        resolve()
                    })
                    .catch((error) => { // .catch false kelganda
                        console.log('Janarlar olishda xatolik')
                        console.log(error)
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories // mutations orqali state ga joylashyapti
        }
    },
    state: {
        categories: {
            models: [], // "hydra:member":
            totalItems: 0, // "hydra:totalItems":
        }
    },
    getters: {
        getCategories(state) {
            return state.categories.models // state dagi categories qaytarsin
        }
    }
}