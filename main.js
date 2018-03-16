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
        text: 'Learn Javascript'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something awesome'
      }
    ]
  },
  methods: {
    alertBox: alertMessage()
  }
})

var alertMessage = function () {
  alert('Submit Successful!');
}