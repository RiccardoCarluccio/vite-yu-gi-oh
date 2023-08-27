<script>
  import axios from "axios";
  import SingleCard from "./SingleCard.vue";

  export default {
    components: {
      SingleCard,
    },
    data() {
      return {
        cards: [],
      }
    },
    methods: {
      fetchCards() {
        const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

        axios.get(url).then((response) => {
          this.cards = response.data.data;
        })
      }
    },
    mounted() {
      this.fetchCards();
    },
  };
</script>

<template>
  <div class="main-content-container">

    <div class="card-container" v-for="singleCard in cards" :key="singleCard.id">
      <SingleCard :card="singleCard"></SingleCard>
    </div>

  </div>
</template>

<style scoped lang="scss">
  @import "../scss/partials/variables";

  .main-content-container {
    background-color: white;
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;

    .card-container {
      background-color: $color-primary;
      width: calc(100% / 5.5);
      min-width: 300px;
      text-align: center;
    }
  }
</style>