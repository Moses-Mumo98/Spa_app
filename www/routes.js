var routes = [
  {
    path: '/',
    componentUrl: './index.html',
    name: 'index',
  },

    // About page
    {
      path: '/',
      url: './messages.html',
      name: 'messages',
    },
    
  
    // Default route (404 page). MUST BE THE LAST
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ];
  