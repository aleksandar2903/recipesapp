<template>
  <div class="container">
    <div class="categories">
      <RecipeCategory
        @click="onCategoryClick(category)"
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
    <div class="recipes">
      <RecipeCard
        :index="index"
        v-for="(recipe, index) in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
      <LoadingCard v-for="index in loadingCards" :key="index"></LoadingCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeCard from "@/components/RecipeCard.vue";
import RecipeCategory from "@/components/RecipeCategory.vue";
import LoadingCard from "@/components/LoadingCard.vue";
import RecipesService from "@/services/RecipesService.js";

export default {
  name: "RecipeList",
  components: {
    RecipeCard,
    RecipeCategory,
    LoadingCard,
  },
  data() {
    return {
      loading: false,
      totalRecords: 0,
      offset: 0,
      limit: 6,
      recipes: [],
      categories: [],
    };
  },
  created() {
    this.loadCategories();
    this.loadRecords().then(() => this.scrollTrigger());
  },
  computed: {
    loadingCards() {
      return this.loading ? 4 : 0;
    },
  },
  methods: {
    async loadRecords() {
      this.loading = true;
      return await RecipesService.getRecipes(
        "/businesses/search?latitude=37.786882&longitude=-122.399972&offset=" +
          this.offset
      )
        .then((response) => {
          this.recipes.push(...response.data.businesses);
          this.offset += 15;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async onCategoryClick(category) {
      this.loading = true;
      return await RecipesService.getRecipes(
        "/businesses/search?latitude=37.786882&longitude=-122.399972&categories=" +
          category.alias
      )
        .then((response) => {
          this.recipes = response.data.businesses;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    loadMoreRecords() {
      this.loadRecords().then(() => this.scrollTrigger());
    },
    loadCategories() {
      this.loading = true;
      RecipesService.getRecipes("/categories").then((response) => {
        this.categories = response.data.categories.slice(0, 20);
      });
    },
    scrollTrigger() {
      const cards = document.querySelectorAll(".recipe-card");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              if (
                this.offset - entry.target.getAttribute("index") ==
                this.limit
              ) {
                this.loadMoreRecords();
              }
              observer.unobserve(entry.target);
            }
          },
          {
            threshold: 1,
          }
        );
      });
      cards.forEach((card) => {
        observer.observe(card);
      });
    },
  },
};
</script>
<style lang="scss">
.container {
  margin: auto;
  max-width: 1200px;
  height: 100%;
  padding: var(--size-1);
  .recipes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: minmax(300px, 1fr);
    gap: var(--size-2) var(--size-2);
  }
  .categories {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(23%, 1fr);
    overflow-x: scroll;
    gap: var(--size-2) var(--size-2);
    padding-bottom: var(--size-1);
    margin-bottom: var(--size-2);
  }
  @media screen and (max-width: 990px) {
    .recipes {
      grid-template-columns: repeat(3, 1fr);
    }
    .categories {
      grid-auto-columns: minmax(31%, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .recipes {
      grid-template-columns: repeat(2, 1fr);
    }
    .categories {
      grid-auto-columns: minmax(47%, 1fr);
    }
  }
  @media screen and (max-width: 576px) {
    .recipes {
      grid-template-columns: repeat(1, 1fr);
    }
    .categories {
      grid-auto-columns: minmax(45%, 1fr);
    }
  }
}
#scoll-trigger {
  height: 100px;
}
</style>
