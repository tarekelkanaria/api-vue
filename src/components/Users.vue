<!-- View for users and get the data -->
<template>
  <section class="wrapper">
    <!-- Loop over the array of data and access th data from API -->
    <article
      v-if="usersData.length"
      v-for="user in usersData"
      :key="user.id"
      class="card"
    >
      <h2>{{ user.name }}</h2>
      <p><span>User name</span> {{ user.username }}</p>
      <p><span>City</span>{{ user.address.city }}</p>
      <p><span>Company</span>{{ user.company.name }}</p>
    </article>
    <!-- Handle errors and loading -->
    <p v-else-if="isError" class="err">Ops something went wrong {{ error }}</p>
    <p v-else class="loading">Loading ...</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      usersData: [],
      isError: false,
      error: "",
    };
  },
  //   Call get request once the component mounted
  mounted() {
    this.getUsers();
  },
  methods: {
    // Get request to the API using axios
    async getUsers() {
      try {
        this.isError = false;
        const usersResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { headers: { "cache-control": "no-cache" } }
        );
        this.usersData = usersResponse.data;
      } catch (err) {
        this.isError = true;
        this.error = err.message;
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
  padding-bottom: 3rem;
}
.card {
  padding: 2rem;
  box-shadow: 0.2rem 0.2rem 0 #646cffaa;
  background-color: #646cffaa;
  border-radius: 0.8rem;
  min-width: 34rem;
  text-align: center;
}
@media (max-width: 767px) {
  .card {
    width: 100%;
    min-width: unset;
  }
}
.card h2 {
  font-size: 2rem;
  color: #eebf63;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
.card span {
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem;
  margin-right: 1rem;
}
.card p {
  color: #eebf63;
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
