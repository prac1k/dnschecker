<template >
  <div>
    <h1>DC Ip Checker</h1>
  <div>
    <p>
     <input type="text" v-model="msg">
     <button v-on:click="getipData">IP DC CHECK</button>
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
      msg: []
    };
  },
  methods: {

    getipData()
    {
      axios.get("http://ip-api.com/json/"+this.msg
      ).then(response => (this.ipDataList = response.data));


    },

  }
};
</script>

<style scoped>


</style>