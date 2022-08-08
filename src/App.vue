<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --size-1: 1rem;
  --size-2: 2rem;
  --size-3: 3rem;
  --primary-color: #42b983;
  --secondary-color: #f5f5f5;
  --box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  --linear-background: linear-gradient(
    90deg,
    rgba(23, 255, 195, 1) 49%,
    rgba(19, 243, 252, 1) 100%
  );
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #e8e8e8;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
