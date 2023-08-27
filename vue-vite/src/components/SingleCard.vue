<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<template>
  <div class="card-preview">
    <img :src="card.card_images[0].image_url" alt="">
  </div>
  <div class="card-caption">
    <div class="card-name">{{ card.name }}</div>
    <div class="card-archetype">{{ card.archetype }}</div>
  </div>
</template>

<style scoped lang="scss">
  .card-caption {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0 0.6rem;
  }

  img {
    max-width:100%;
    max-height:100%;
  }

</style>