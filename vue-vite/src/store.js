import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  // name: "",
  // archetype: "",
  // cards: [],
  // isLoading: false,
  searchText: "",
});

export function fetchCards(nextUrl) {
  const url = nextUrl ?? "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0";

  axios.get(url).then((response) => {
    store.cards = response.data.data;
  });
};

// export function fetchCard(nextUrl) {
//   store.isLoading = true;

//   const url = nextUrl ? nextUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php";

//   axios.get(url).then((response) => {
//     store.name.push(...response.data.results);
//     store.archetype = response.data.info;

//     setTimeout(() => {
//       store.isLoading = false;
//     }, 1000);
//   });
// }