<template >
  <div class="ipchecker">
    <h1>Ip Checker</h1>
  <div>
    <p>
     <input type="text" v-model="msg">
     <button v-on:click="getipData">Check this IP!</button>
    </p>
  </div>
      <div v-for="ipData in ipDataList" :key="ipData.id">
        </div>
         <div>
          <p class="query">Server IP address: {{ipDataList.query}}</p>
           <p class="isp"> ISP: {{ipDataList.isp}}</p>
          <p class="country">Country: {{ipDataList.country}}</p>
          <p class="city">City: {{ipDataList.city}}</p>
          <p class="regionName">Region: {{ipDataList.regionName}}</p>
         </div>
        </div>
  <div class="whatsmyip">
    <h1>What's my Ip</h1>
    <div>
      <p>heck my IP!<
          <button v-on:click="getMyIpData">C/button>
      </p>
    </div>
    <div v-for="myIpData in myIpDataList" :key="myIpData.id">
    </div>
    <div>
      <p class="query">Server IP address: {{myIpDataList.query}}</p>
      <p class="isp"> ISP: {{myIpDataList.isp}}</p>
      <p class="country">Country: {{myIpDataList.country}}</p>
      <p class="city">City: {{myIpDataList.city}}</p>
      <p class="regionName">Region: {{myIpDataList.regionName}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DcIpchk',
  data() {
    return {
      ipDataList: [{
        regionName: null
      }],
      msg: [],
      myIpDataList: [{
      }],
    };
  },
  methods: {

    getipData()
    {
      axios.get("http://ip-api.com/json/"+this.msg
      ).then(response => (this.ipDataList = response.data));
    },

    getMyIpData()
    {
      axios.get("http://ip-api.com/json/").then(response => (this.myIpDataList = response.data));


    },

  }
};
</script>

<style scoped>

.ipchecker {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.whatsmyip {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>