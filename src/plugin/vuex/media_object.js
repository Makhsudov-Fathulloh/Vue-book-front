import axios from "@/plugin/vuex/axios";

export default {
    actions: {
        pushFile(context, formData) { // Promise. Kitobni olish actioni
            return new Promise((resolve, reject) => {
                axios.post( 'http://localhost:8505/api/media_objects', formData,
                    {
                        headers: {
                            'Content-Type':'multipart/form-data' // Swagger postidagi header (key value) qismi
                        }
                    })
                    .then((response) => { // .then true kelganda
                        console.log('Rasm olindi')
                        console.log(response)

                        let picture = {
                            pictureId: response.data.id
                        }

                        // Mutationsni toldiramiz
                        context.commit('updateFile', picture)
                        resolve()
                    })
                    .catch(() => { // .catch false kelganda
                        console.log('Rasm qushishda xatolik')
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateFile(state, picture) {
            state.picture = picture // mutations orqali state ga joylashyapti
        }
    },

    state: {
        picture: {
            pictureId: null
        }

    },

    getters: {
        getFile(state) {
            return state.picture // state dagi books qaytarsin
        }
    }
}