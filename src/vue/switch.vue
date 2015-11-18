
<style>
  .btn-on,
  .btn-off {
    width: 100px;
    height: 30px;
    line-height: 28px;
    outline: none;
  }
  .on .btn-on,
  .off .btn-off {
    background-color: #fff;
    border: #ccc;
    cursor: auto;
  }
</style>

<template>
  <div class="switch-container" v-bind:class="status">
    <button class="btn-on" v-on:click="changeStatus('on')">switch-on</button>
    <button class="btn-off" v-on:click="changeStatus('off')">switch-off</button>
  </div>
</template>

<script>
  export default {
    props: ['status'],
    data() {
      console.log('data', this.status);
      return {};
    },
    methods: {
      changeStatus(s) {
        console.log(s);
        if(this.status === s) {
          return;
        } else {
          this.status = s;
          this.$dispatch('switch-status-change', this.status);
        }
      }
    }
  }
</script>
