<!-- Match the route with the corresponding view -->
<template>
  <header class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/posts">Posts</router-link>
  </header>
  <main class="wrapper">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  margin-block: 2rem;
  background-color: #646cffaa;
  color: #fff;
  font-weight: bold;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 2rem;
  border-radius: 0.8rem;
}
.wrapper {
  width: 90%;
  margin: auto;
  padding-bottom: 3rem;
}
.router-link-active {
  color: #ffa000;
  border-bottom: 2px solid #eebf63;
}
</style>
