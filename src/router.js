// Configure router from Vue Router
import { createRouter, createWebHistory } from "vue-router";
// Import the main views for router
import HomeView from "./components/HomeView.vue";
import Users from "./components/Users.vue";
import Posts from "./components/Posts.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
