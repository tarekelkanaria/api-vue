<!-- View for posts and get the data -->
<template>
  <section class="wrapper">
    <!-- Loop over the array of data and access th data from API -->
    <article
      v-if="postsData.length"
      v-for="item in postsData"
      :key="item.id"
      class="card"
    >
      <h2>{{ item.title }}</h2>
      <p>{{ item.body }}</p>
    </article>
    <!-- Handle errors and loading -->
    <p v-else-if="isError" class="err">Ops something went wrong {{ error }}</p>
    <p v-else class="loading">Loading ...</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      postsData: [],
      isError: false,
      error: "",
    };
  },
  //   Call get request once the component mounted
  mounted() {
    this.getPosts();
  },
  methods: {
    // Get request to the API using axios
    async getPosts() {
      try {
        this.isError = false;
        const postsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          { headers: { "cache-control": "no-cache" } }
        );
        this.postsData = postsResponse.data;
      } catch (error) {
        this.isError = true;
        this.error = error.message;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-bottom: 3rem;
}
.card {
  padding: 2rem;
  box-shadow: 0.2rem 0.2rem 0 #646cffaa;
  background-color: #646cffaa;
  max-width: 30%;
  min-height: 50rem;
  border-radius: 0.8rem;
}
@media (max-width: 767px) {
  .card {
    max-width: unset;
    min-height: unset;
  }
}
.card h2 {
  font-size: 2rem;
  color: #eebf63;
  font-weight: bold;
  margin-bottom: 5rem;
  text-align: center;
}
.card p {
  color: #fff;
  font-weight: bold;
  word-wrap: break-word;
}
.err {
  color: red;
  font-weight: bold;
  font-size: 2.4rem;
}
.loading {
  color: #00796b;
  font-size: 2.4rem;
  font-weight: bold;
}
</style>
