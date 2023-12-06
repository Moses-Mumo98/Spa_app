var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'my app',
  // App id
  id: 'xyz.gnovation.moseApp',
  view: {stackPages: true},
  data: function() {},
  methods: {},
  routes: routes
  // Enable swipe panel
  // panel: {
  //     swipe: 'left',
  // },
  // // Add default routes
  // routes: [
  //     {
  //         path: '/messages/',
  //         url: './messages.html', // Adjust the path accordingly
  //     },
  //     // Add more routes if needed
  // ],
});
var view = app.views.create('.view-main');