// app.js (containing Framework7 initialization)
var app = new Framework7({
  // App initialization options
  // ...
});

// Views
var mainView = app.views.create('.view-main');

// other.js (containing your login click handler)
$(document).ready(function() {
  $('#login').on('click', function(e) {
    e.preventDefault();
    // Use 'app' here
    app.views.main.router.navigate('/messages/');
    return false;
  });
});
