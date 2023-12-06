// signin.js

export default (props, { $, $f7 }) => {
    $('#signinBtn').on('click', () => {
      $f7.views.main.router.navigate('/messages/');
    });
  
    return $render;
  };
  