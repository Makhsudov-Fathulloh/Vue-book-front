<template>

  <!--  Container boshlandi-->
  <div class="container-fluid">
    <HeaderRow />

    <!-- Site bar (main)-->
    <div class="row mt-4">
      <CategoriesCol />

      <!-- Book Content -->
      <div class="col col-md-9 mt-4 mt-md-0">
        <router-view />
      </div>
      <!-- Content tugadi -->
    </div>

    <!-- Footer -->
    <FooterRow />
  </div>
  <!-- Container tugadi -->

</template>

<script>
import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import FooterRow from "@/components/FooterRow.vue";

export default {
  components: {FooterRow, CategoriesCol, HeaderRow}
}
</script>

<style scoped>

</style>
