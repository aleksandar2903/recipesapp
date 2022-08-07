<template>
  <div class="categories">
    <RecipeCategory
      @click="onCategoryClick(category)"
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
  <div class="container">
    <div class="recipes">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeCard from "@/components/RecipeCard.vue";
import RecipeCategory from "@/components/RecipeCategory.vue";
import RecipesService from "@/services/RecipesService.js";

export default {
  name: "RecipeList",
  components: {
    RecipeCard,
    RecipeCategory,
  },
  data() {
    return {
      recipes: [],
      categories: [],
    };
  },
  created() {
    RecipesService.getRecipes(
      "/businesses/search?latitude=37.786882&longitude=-122.399972"
    ).then((response) => {
      this.recipes = response.data.businesses;
    });
    RecipesService.getRecipes("/categories").then((response) => {
      this.categories = response.data.categories.slice(0, 20);
    });
  },
  methods: {
    onCategoryClick(category) {
      RecipesService.getRecipes(
        "//businesses/search?categories=" +
          category.alias +
          "&latitude=37.786882&longitude=-122.399972"
      ).then((response) => {
        this.recipes = response.data.businesses;
      });
    },
  },
};
</script>
<style lang="scss">
.categories {
  display: flex;
  overflow-x: auto;
  padding: 30px;
}
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  padding: 20px;
  .recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 15px;
    direction: row;
    padding: 30px;
  }
}
// .recipes::after {
//   content: "";
//   padding: 30px;
// }
</style>
