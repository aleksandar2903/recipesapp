import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.VUE_APP_API_KEY}`,
  },
});

export default {
  // RecipesService
  getRecipes(query) {
    return client.get(query);
  },
};
