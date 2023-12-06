var $$ = Dom7;
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'my app',
  // App id
  id: 'xyz.gnovation.moseApp',
  view: {
    stackPages:true,
  },
  data: function() {},
  methods: {},
  routes: [
      {
          name:'/messages',        
          componentUrl: '/messages/',
          url: './www/messages.html', // Adjust the path accordingly
      },
      // Add more routes if needed
  ],
});

var view = app.views.create('.view-main');

