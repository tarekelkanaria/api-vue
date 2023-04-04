<!-- View for home route -->
<template>
  <section class="wrapper">
    <h1>Hello...</h1>
    <p>This is your list of Users and Posts</p>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.wrapper {
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0.2rem 0.2rem 0 #646cffaa;
  background-color: #646cffaa;
}
.wrapper h1 {
  font-size: 2.4rem;
  color: #eebf63;
  font-weight: bold;
  margin-bottom: 1rem;
}
.wrapper p {
  color: #fff;
  font-weight: bold;
}
</style>
