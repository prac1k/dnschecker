<template >
  <div class="dnspropmain">
    <h1>DNS Propagation checker</h1>
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

.dnspropmain{
  text-align: center;
}

</style>