<script>
  import { store } from "../store";

  export default {
    data() {
      return {
        store,
      }
    }
  };
</script>

<template>
  <div class="label-option-container">
    <label for="card-select">Choose a card type:</label>

  <!-- <select name="cardTypes" id="cardTypes">
    <option value="placeholder">placeholder</option>
    <option value="placeholder">placeholder</option>
    <option value="placeholder">placeholder</option>
    <option value="placeholder">placeholder</option>
  </select> -->

  <input type="text" id="cardType" name="cardType" v-model="store.searchText" placeholder="Write here"/>
  </div>
</template>

<style scoped lang="scss">
  label {
    padding-right: .5rem;
  }

  // select {
  //   padding: .5rem;
  // }

  input {
    padding: 0.3rem;
  }
</style>