<template>
    <div>
      <button :class="style">
          <slot></slot>
      </button>
    </div>

</template>

<script>
export default {
  name: "AppButton",
  props: {
    style: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>