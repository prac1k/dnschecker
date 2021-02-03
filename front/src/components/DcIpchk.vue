<template>
  <div>
    <h1>DC Ip Checker</h1>
    <div id="ip">
        <p>
          <input type="text" v-model="msg">
          {{msg}}
      <button v-on:click="getipData">IP DC CHECK</button>
        </p>
      </div>


    <div v-for="ipData in ipDataList" :key="ipData.id" class="weather-data">
      <div class="ipAddress">
        <div>
          <span>{{ipData.ipAddress}}</span>
        </div>
        <div>
          <span class="continentName">{{ipData.continentName}}</span>
        </div>
      </div>
      <div class="countryName">
        <span>{{ipData.countryName}}°</span>
      </div>
      <div class="stateProv">
        <span>{{ipData.stateProv}}°</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DcIpchk',
  data() {
    return {
      ipDataList: [],
      msg: null,
    };
  },
  methods: {
    getipData() {
      axios.get("http://api.db-ip.com/v2/free/"+this.msg
      ).then(response => (this.ipDataList = response.data));
      console.log(this.ipDataList)

    },

  }
};
</script>

<style scoped>

.continentName {
  flex-grow: 8;
  text-align: center;
  padding-left: 20px;
}

button {
  padding:10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
</style>