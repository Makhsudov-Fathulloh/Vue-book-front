<template>
  <div>
       <router-link :to="goTo" class="btn btn-sm btn-primary">
          {{ title }}
       </router-link>
  </div>
</template>

<script>
export default {
  name: "AddButtonLink",
  props: {
    title: {
      type: String,
      default: 'Knopka'
    },
    goTo: {
      type: String,
      required: true
    },
    style: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>