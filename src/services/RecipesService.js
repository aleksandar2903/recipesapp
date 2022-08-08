import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    apiKey: process.env.VUE_APP_API_KEY,
    number: 15,
  },
});

export default {
  // RecipesService
  getRecipes(query) {
    return client.get(query);
  },
};
