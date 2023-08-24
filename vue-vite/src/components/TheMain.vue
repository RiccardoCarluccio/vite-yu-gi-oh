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
  <div class="main-container">
    <TheCardTypeSelect></TheCardTypeSelect>
    <TheMainContent></TheMainContent>
  </div>
</template>

<style scoped lang="scss">

</style>