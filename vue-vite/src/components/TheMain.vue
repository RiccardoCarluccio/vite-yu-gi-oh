<script>
  import TheCardTypeSelect from './TheCardTypeSelect.vue';
  import TheMainContent from './TheMainContent.vue';

  export default {
    components: {
      TheCardTypeSelect,
      TheMainContent,
    }
  };
</script>

<template>
  <div class="label-content-container">
    <TheCardTypeSelect></TheCardTypeSelect>
    <TheMainContent></TheMainContent>
  </div>
</template>

<style scoped lang="scss">
  @import "../scss/partials/mixins";

  .label-content-container {
    @include flex-col-c-c;
    align-items: flex-start;
    gap: 2rem;
  }
</style>