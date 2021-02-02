<template>
  <div id="app">
    <DcIpchk/>
  </div>
</template>

<script>
import DcIpchk from './components/DcIpchk'

export default {
  name: 'app',
  components: {
    DcIpchk
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