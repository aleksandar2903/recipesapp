<template>
  <div class="recipe-category">
    <p>{{ category.title }}</p>
  </div>
</template>

<script>
export default {
  name: "RecipeCategory",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.recipe-category {
  width: 100%;
  box-shadow: var(--box-shadow);
  background: var(--linear-background);
  cursor: pointer;
}
</style>
