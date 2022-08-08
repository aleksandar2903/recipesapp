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
      offset: 15,
      limit: 6,
      recipes: [],
      categories: [
        {
          id: 1,
          title: "Bread",
          alias: "bread",
        },
        {
          id: 2,
          title: "Sauce",
          alias: "sauce",
        },
        {
          id: 3,
          title: "Snack",
          alias: "snack",
        },
        {
          id: 4,
          title: "Beverage",
          alias: "beverage",
        },
        {
          id: 5,
          title: "Soup",
          alias: "soup",
        },
        {
          id: 6,
          title: "Breakfast",
          alias: "breakfast",
        },
        {
          id: 7,
          title: "Side dish",
          alias: "side dish",
        },
        {
          id: 8,
          title: "Main course",
          alias: "main course",
        },
      ],
    };
  },
  created() {
    this.loadRecords();
    this.recipes = this.recipess;
    // RecipesService.getRecipes("/categories").then((response) => {
    //   this.categories = response.data.categories.slice(0, 20);
    // });
  },
  computed: {
    loadingCards() {
      return this.loading ? 4 : 0;
    },
  },
  methods: {
    loadRecords() {
      this.loading = true;
      RecipesService.getRecipes(
        "/recipes/complexSearch?query=a&limitLicense=true"
      )
        .then((response) => {
          this.totalRecords = response.data.totalResults;
          this.recipes = response.data.results;
        })
        .finally(() => {
          this.scrollTrigger();
          this.loading = false;
        });
    },
    loadMoreRecords() {
      this.loading = true;
      RecipesService.getRecipes(
        "/recipes/complexSearch?query=a&limitLicense=true&offset=" + this.offset
      )
        .then((response) => {
          this.recipes.push(...response.data.results);
          this.offset += 15;
        })
        .finally(() => {
          this.loading = false;
          this.scrollTrigger();
        });
    },
    onCategoryClick(category) {
      this.loading = true;
      RecipesService.getRecipes(
        "/recipes/complexSearch?query=&limitLicense=true&type=" + category.alias
      )
        .then((response) => {
          this.recipes = response.data.results;
          this.totalRecords = response.data.totalResults;
          this.offset = 15;
        })
        .finally(() => {
          this.loading = false;
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
              console.log(this.limit, entry.target.getAttribute("index"));
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
