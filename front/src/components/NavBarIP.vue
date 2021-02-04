<template>
  <div class="navbar">
    <div class="navitem"> <router-link to="/">Home</router-link> </div>
    <div class="navitem"> <router-link to="/dcipchk">Ip checker</router-link> </div>
    <div class="navitem"> <router-link to="/dnspropagation">Dns Propagation</router-link> </div>
  </div>
</template>

<script>
//import router from "../router/index.js"
</script>

<style scoped>
.navbar {
  display: flex;
}

.navitem {
  display: flex;
  padding-right: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
}

</style>