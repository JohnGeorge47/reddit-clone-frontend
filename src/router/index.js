/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/LoginSignUp/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Login
    }
  ]
});
