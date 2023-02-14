import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) { // Promise
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/users/auth', data)
                    .then((response) => { // .then true kelganda
                        console.log('Token olindi')
                        console.log(response)

                        // Mutationsni toldiramiz
                        context.commit('updateToken', response.data.token) // backanddan olingan token
                        resolve()
                    })
                    .catch((error) => { // .catch false kelganda
                        console.log('Token olishda xatolik')
                        console.log(error)
                        reject()
                    })
                    .finally(() => {
                        console.log('Bu funksiya har doim ishlaydu')
                    })
            })
        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token // mutations orqali state ga joylashyapti
        }
    },
    state: {
        token: null
    },
    getters: {
        getToken(state) {
            return state.token // state dagi tokenni qaytarsin
        }
    }
}