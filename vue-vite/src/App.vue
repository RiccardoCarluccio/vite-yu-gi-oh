<script>
  import TheHeader from "./components/TheHeader.vue"
  import TheMain from "./components/TheMain.vue"

  export default {
    components: {
      TheHeader,
      TheMain,
    }
  };
</script>

<template>
  <TheHeader></TheHeader>

  <div class="main-container">
    <TheMain></TheMain>
  </div>
</template>

<style lang="scss">
  .main-container {
    background-color: rgba(212,143,56,255);
    height: calc(100vh - 100px);
    padding: 2rem 5rem;
  }
</style>