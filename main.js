Vue.component('todo-item', {
  props: ['todo'],
  template: '<li><input type="checkbox" /> {{ todo.text }}</li>'
})



var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    show: false
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        id:1,
        text: 'Learn Javascript'
      },
      {
        id:2,
        text: 'Learn Vue'
      },
      {
        id:3,
        text: 'Build something awesome'
      }
    ]
  },
  methods: {
    alertBox: function() {alertMessage()}
  },
  created: function() {
    console.log("First todo is " + this.todos[0].text)
  }
})

var alertMessage = function () {
  alert('Submit Successful!');
}

