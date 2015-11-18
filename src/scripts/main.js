
// 双向绑定; app.modelVue.message可以直接修改message的内容
var modelData = {
  message: 'hello vuejs'
};
var appModelVue = new Vue({
  el: '#appModel',
  data: modelData
});

// 绑定方法
var appModelFunVue = new Vue({
  el: '#appModelFun',
  data: {
    a: 1
  },
  computed: {
    b: function () {  // 可以是get set组成的对象
      console.log(typeof this.a);
      return this.a * 2;
    }
  }
});
// 渲染列表
var appListVue = new Vue({
  el: '#appList',
  data: {
    todos: [
      {text: 'HTML'},
      {text: 'CSS'},
      {text: 'javascript'}
    ]
  }
});

// 用户操作
var appEventVue = new Vue({
  el: '#appEvent',
  data: {
    message: 'hello vuejs!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

// 综合
var appAllVue = new Vue({
  el: '#appAll',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos' }
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text: text });
        this.newTodo = '';
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    }
  }
});

Vue.use(VueResource);
// 调用接口
Vue.http.jsonp('https://tce.taobao.com/api/data.htm?ids=93124', function(data) {
  console.log(data);
});
