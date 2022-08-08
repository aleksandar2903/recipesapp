<template>
  <div class="card is-loading">
    <div class="image"></div>
    <div class="content">
      <h2></h2>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  .image {
    img {
      max-width: 100%;
    }
  }

  .content {
    padding: 20px 30px;
  }
}

.card.is-loading {
  .image,
  h2,
  p {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image {
    height: 150px;
    border-radius: 15px 15px 0 0;
  }

  h2 {
    height: 30px;
  }

  p {
    height: 70px;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
@media screen and (max-width: 576px) {
  .card.is-loading {
    display: grid;
    grid-template-columns: 1fr 3fr;
    .image {
      height: 100%;
      border-radius: 15px 0 0 15px;
    }
    h2 {
      height: 10px;
    }

    p {
      height: 20px;
    }
  }
}
</style>
