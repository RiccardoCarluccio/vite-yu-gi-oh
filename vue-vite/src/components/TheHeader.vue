<script>
  export default {

  };
</script>

<template>
  <div class="main-container">
    <img src="../assets/yugioh-logo.png" alt="Yu-Gi-Oh Logo">
    <h1>Yu-Gi-Oh Api</h1>
  </div>
</template>

<style scoped lang="scss">
  @import "../scss/partials/variables";

  .main-container {
    background-color: $color-secondary;
    height: 100px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      height: 80px;
      width: auto;
    }

    h1 {
      font-size: 24px;
      font-weight: 500;
    }
  }
</style>