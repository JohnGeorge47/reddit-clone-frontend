
<template>
  <div class="hello">
    <div v-if="this.$route.name=='Login'">
    <h1>{{ msg }}</h1>
    <h2>Now if you are a first time user do sign up here</h2>
    <div class="loginSignupForm">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup2"
                label-for="exampleInput2">
    <b-form-input id="exampleInput2"
                  type="text"
                  v-model="form.name"
                  required
                  placeholder="Enter name">
    </b-form-input>
  </b-form-group>
  <b-form-group id="exampleInputGroup3"
            label-for="exampleInput3">
<b-form-input id="exampleInput3"
              type="password"
              v-model="form.name"
              required
              placeholder="Enter your password">
</b-form-input>
</b-form-group>
    </b-form>
</div>
    <router-link :to="{ name: 'signup'}"><h3>Sign up here!</h3></router-link>
  </div>
  <div v-else>
      <h1>{{ signupmsg }}</h1>
      <h2>You can Login by clicking below</h2>
      <router-link :to="{ name: 'Login'}"><h3>Log in!</h3></router-link>
  </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "Login",
  data() {
    return {
      msg: "Lets get You Logged in",
      signupmsg: "Sign up here",
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  computed: {
    state() {
      console.log("sxx");
      console.log(this.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media screen and (min-width: 768px) {
  .loginSignupForm {
    margin: auto;
    width: 40%;
  }
}
@media screen and (max-width: 768px) {
  .loginSignupForm {
    margin: auto;
    width: 80%;
  }
}
#input2 {
  margin-top: 15px;
}
</style>
