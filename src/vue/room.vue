<template>
  <div class="room">
    <h1>Room lamp is {{status}}</h1>
    <lamp v-bind:status="status"></lamp>
    <switch v-bind:status="status"></switch>
  </div>
</template>

<script>
  import Switch from './switch.vue';
  import Lamp from './lamp.vue';

  export default {
    data() {
      return {status: 'on'};
    },
    events: {
      'switch-status-change': function(status) {
        console.log('switch-status-change', status);
        this.status = status;
      }
    },
    components: {
      'switch': Switch,
      'lamp': Lamp
    }
  }
</script>
