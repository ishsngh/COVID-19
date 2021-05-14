var lightmode = document.getElementById('inner-switch');

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( "html" ).removeClass( "dark" );
      localStorage.setItem('lightmode', 'true');
    } else {
      $( "body" ).addClass( "dark" );
      $( "html" ).addClass( "dark" );
      localStorage.setItem('lightmode', 'false');
    }
});

if (localStorage.getItem('lightmode') === 'true') {
	  $( "body" ).removeClass( "dark" );
      $( "html" ).removeClass( "dark" );
}