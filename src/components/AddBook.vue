<template>

    <form class="col-6" @submit.prevent="addBook">
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

        <div class="mb-3">
            <label for="formFile" class="form-label">Rasm yuklang</label>
            <input class="form-control" type="file" ref="file" id="file" @change="fileUpload">
        </div>

        <button type="button" class="btn btn-primary" @click="addBook">Qo'shish</button>
    </form>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddBook",
    data() {
        return {
            form: {
                name: '',
                description: '',
                text: '',
                category: '',
                picture: ''
            },
            file: ''
        }
    },

    computed: {
        ...mapGetters(['getBook', 'getCategories', "getFile"])
    },

    methods: {
        ...mapActions(['pushBook', "pushFile"]),
        fileUpload() {
            this.file = this.$refs.file.files[0] // $refs global obyekt
        },

        addBook() {
            let formData = new FormData() // JS ning konstruqtiv FormData() funqsiyasi
            formData.append('file', this.file) // append() JS methodi (qoshish manosida)

            this.pushFile(formData) // add picture
                .then(() => { // undan keyin
                    console.log(this.getFile, 'bu rasm id')
                    this.form.picture = '/api/media_objects/' + this.getFile.pictureId
                    this.pushBook(this.form) // bu (form) ishlasiz
                    alert("Kitob muvaffaqiyatli qo'shildi")
                    this.$router.push('/')
                })
        }
    }
}

</script>

<style scoped>

</style>