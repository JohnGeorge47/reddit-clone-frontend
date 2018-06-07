<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Now if you are a first time user do sign in here</h2>
    <router-link :to="{ name: 'signup'}"><h3>Sign up here!</h3></router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Lets get You Logged in"
    };
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
</style>
