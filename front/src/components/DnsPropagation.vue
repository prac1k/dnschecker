<template >
  <div class="dnspropmain">
    <h1>DNS Propagation checker</h1>
<!--    test view-->
    <div class="event-single">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{ event.name }}</h1>
            <h2 class="subtitle">
              <strong>Date:</strong>
              {{ event.date }}
              <br />
              <strong>Time:</strong>
              {{ event.time }}
            </h2>
          </div>
        </div>
      </section>
      <section class="event-content">
        <div class="container">
          <p class="is-size-4 description">{{ event.description }}</p>
          <p class="is-size-5">
            <strong>Location:</strong>
            {{ event.location }}
          </p>
          <p class="is-size-5">
            <strong>Category:</strong>
            {{ event.category }}
          </p>
          <div class="event-images columns is-multiline has-text-centered">
            <div v-for="image in event.images" :key="image.id" class="column is-one-third">
              <img :src="`${image}`" :alt="`${event.name}`" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import EventService from '../services/DnspropagationService';
export default {
  name: 'DnsPropagation',
  data() {
    // NEW - initialize the event object
    return {
      event: {}
    }
  },
  created() {
    this.getEventData(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getEventData() {
      // Use the eventService to call the getEventSingle() method
      EventService.getEventSingle(this.$route.params.id)
          .then(
              (event => {
                this.$set(this, "event", event);
              }).bind(this)
          );
    }
  }
}
</script>

<style scoped>

.dnspropmain{
  text-align: center;
}

</style>