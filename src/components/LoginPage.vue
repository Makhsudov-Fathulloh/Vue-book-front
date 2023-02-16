<template>

  <form class="col-6" @submit.prevent="auth">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="form.email"
      >
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="form.password"
      >
    </div>
    <button type="button" class="btn btn-primary" @click="auth">Jo'natish</button>
  </form>

</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "LoginPage",
  data() {
     return {
         form: {
           email: '',
           password: ''
         }
     }
  },
  methods: {
    ...mapActions(['fetchToken']),
    auth() {
      console.log('ishladi')

      this.fetchToken(this.form)
          .then(() => {
            this.$router.push('/') // token olinganda ushbu Asosiy sahifaga otkazish
          })
          .catch(() => {
            alert("email yoki parolni noto'gri kiritdingiz")
          })
    }
  }
}
</script>

<style scoped>

</style>