<style>
  .lamp {
    display: inline-block;
    width: 100px;
    height: 30px;
    margin: 0 0 10px 0;
    border: 1px solid #ccc;
  }
  .lamp-on {
    background: #fff;
    color: #000;
  }
  .lamp-off {
    background: #000;
    color: #fff;
  }
</style>

<template>
  <div class="lamp" v-bind:class="status === 'on' ? 'lamp-on' : 'lamp-off'">lamp</div>
</template>

<script>
  export default {
    props: ['status'],
    data() {
      return {};
    }
  }
</script>
