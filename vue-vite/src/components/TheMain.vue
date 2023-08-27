<script>
  import TheCardTypeSelect from './TheCardTypeSelect.vue';
  import TheCardList from './TheCardList.vue';
  import Loader from './Loader.vue';

  export default {
    components: {
    TheCardTypeSelect,
    TheCardList,
    Loader,
}
  };
</script>

<template>
  <div class="main-container">

    <div class="label-content-container">

      <TheCardTypeSelect></TheCardTypeSelect>
      <TheCardList></TheCardList>

    </div>

  </div>  
</template>

<style scoped lang="scss">
  @import "../scss/partials/mixins";
  @import "../scss/partials/variables";

  .main-container {
    background-color: $color-primary;
    height: 100%;
    padding: 2rem 4rem;
  }

  .label-content-container {
    @include flex-col-c-c;
    align-items: flex-start;
    gap: 2rem;
  }
</style>