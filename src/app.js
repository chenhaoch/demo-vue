var Vue = require('vue')
var Room = require('./vue/room.vue')

new Vue({
  el: 'body',
  components: {
    room: Room
  }
})
