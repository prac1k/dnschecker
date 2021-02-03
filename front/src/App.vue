<template>
  <div id="app">
<!--    <b-navbar toggleable="md" type="dark" variant="dark">-->
<!--      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>-->
<!--      <b-navbar-brand to="/">My Vue App</b-navbar-brand>-->
<!--      <b-collapse is-nav id="nav_collapse">-->
<!--      <b-navbar-nav>-->
<!--    <b-nav-item to="/">Home</b-nav-item>-->
<!--    <b-nav-item to="/dcipchk">Ip checker</b-nav-item>-->
<!--    <b-nav-item to="/dnspropagation">Dns Propagation</b-nav-item>-->
<!--      </b-navbar-nav>-->
<!--      </b-collapse>-->
<!--    </b-navbar>-->
<!--    <router-view />-->
    <DcIpchk/>
    <!--    <DnsPropagation/>-->
    <!--    <Dashboard/>-->
  </div>
</template>

<script>
import DcIpchk from './components/DcIpchk'
//import DnsPropagation from './components/DnsPropagation'
//import Dashboard from './components/Dashboard'


export default {
  name: 'app',
   components: {
    DcIpchk,
  //   DnsPropagation,
  //  Dashboard
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>