new Vue({
      el: '#app',
      data: {
        input: ''
      },
      computed: {
        UPPER: function() {
          return this.input.toUpperCase();
        }
      }

    });