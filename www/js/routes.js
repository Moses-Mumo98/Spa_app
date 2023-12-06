// var app = new Framework7({

// var routes = [
//   {
//     path: 'index',
//     url: '../www/index.html',
//     name: 'index',
//   },

//     // About page
//     {
//       path: '/messages/',
//       url: '../www/messages.html',
//       name: 'messages',
//     },
    
  
//     // Default route (404 page). MUST BE THE LAST
//     {
//       path: '(.*)',
//       url: './pages/404.html',
//     },
//   ];
// });


var app = new Framework7({
  routes: [
    {
    path: 'index',
    url: './www/index.html',
    name: 'index',
    },
    {
    path: 'messages',
    url: './www/messages.html',
    name: 'messages',
    },
    {
      path: 'signin',
      url: './www/signin.html',
      name: 'signin',
      },
   
    // Default route, match to all pages (e.g. 404 page)
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ],
});