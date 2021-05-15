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

$( "#sortswitch" ).on("click", function() {
    if( $( "table" ).hasClass( "today" )) {
      $( "table" ).removeClass( "today" );
    } else {
      $( "table" ).addClass( "today" );
    }
});

$( "#sort" ).on("click", function() {
  $( "#sort1" ).removeClass( "headerSortDown" );
  $( "#sort1" ).removeClass( "headerSortUp" );
  $( "#sort2" ).removeClass( "headerSortDown" );
  $( "#sort2" ).removeClass( "headerSortUp" );
  $( "#sort3" ).removeClass( "headerSortDown" );
  $( "#sort3" ).removeClass( "headerSortUp" );
  $( "#sort4" ).removeClass( "headerSortDown" );
  $( "#sort4" ).removeClass( "headerSortUp" );	
    if( $( "#sort" ).hasClass( "headerSortDown" )) {
      $( "#sort" ).removeClass( "headerSortDown" );
      $( "#sort" ).addClass( "headerSortUp" );  
    } else if ( $( "#sort" ).hasClass( "headerSortUp" ) ) {
      $( "#sort" ).addClass( "headerSortDown" );
      $( "#sort" ).removeClass( "headerSortUp" );
    } else {
      $( "#sort" ).addClass( "headerSortUp" );
    }
});

$( "#sort1" ).on("click", function() {
  $( "#sort" ).removeClass( "headerSortDown" );
  $( "#sort" ).removeClass( "headerSortUp" );
  $( "#sort2" ).removeClass( "headerSortDown" );
  $( "#sort2" ).removeClass( "headerSortUp" );
  $( "#sort3" ).removeClass( "headerSortDown" );
  $( "#sort3" ).removeClass( "headerSortUp" );
  $( "#sort4" ).removeClass( "headerSortDown" );
  $( "#sort4" ).removeClass( "headerSortUp" );
    if( $( "#sort1" ).hasClass( "headerSortDown" )) {
      $( "#sort1" ).removeClass( "headerSortDown" );
      $( "#sort1" ).addClass( "headerSortUp" );
    } else if ( $( "#sort1" ).hasClass( "headerSortUp" ) ) {
      $( "#sort1" ).addClass( "headerSortDown" );
      $( "#sort1" ).removeClass( "headerSortUp" );
    } else {
      $( "#sort1" ).addClass( "headerSortUp" );
    }
});

$( "#sort2" ).on("click", function() {
  $( "#sort1" ).removeClass( "headerSortDown" );
  $( "#sort1" ).removeClass( "headerSortUp" );
  $( "#sort" ).removeClass( "headerSortDown" );
  $( "#sort" ).removeClass( "headerSortUp" );
  $( "#sort3" ).removeClass( "headerSortDown" );
  $( "#sort3" ).removeClass( "headerSortUp" );
  $( "#sort4" ).removeClass( "headerSortDown" );
  $( "#sort4" ).removeClass( "headerSortUp" );
    if( $( "#sort2" ).hasClass( "headerSortDown" )) {
      $( "#sort2" ).removeClass( "headerSortDown" );
      $( "#sort2" ).addClass( "headerSortUp" );
    } else if ( $( "#sort2" ).hasClass( "headerSortUp" ) ) {
      $( "#sort2" ).addClass( "headerSortDown" );
      $( "#sort2" ).removeClass( "headerSortUp" );
    } else {
      $( "#sort2" ).addClass( "headerSortUp" );
    }
});

$( "#sort3" ).on("click", function() {
  $( "#sort1" ).removeClass( "headerSortDown" );
  $( "#sort1" ).removeClass( "headerSortUp" );
  $( "#sort2" ).removeClass( "headerSortDown" );
  $( "#sort2" ).removeClass( "headerSortUp" );
  $( "#sort" ).removeClass( "headerSortDown" );
  $( "#sort" ).removeClass( "headerSortUp" );
  $( "#sort4" ).removeClass( "headerSortDown" );
  $( "#sort4" ).removeClass( "headerSortUp" );
    if( $( "#sort3" ).hasClass( "headerSortDown" )) {
      $( "#sort3" ).removeClass( "headerSortDown" );
      $( "#sort3" ).addClass( "headerSortUp" );
    } else if ( $( "#sort3" ).hasClass( "headerSortUp" ) ) {
      $( "#sort3" ).addClass( "headerSortDown" );
      $( "#sort3" ).removeClass( "headerSortUp" );
    } else {
      $( "#sort3" ).addClass( "headerSortUp" );
    }
});

$( "#sort4" ).on("click", function() {
  $( "#sort1" ).removeClass( "headerSortDown" );
  $( "#sort1" ).removeClass( "headerSortUp" );
  $( "#sort2" ).removeClass( "headerSortDown" );
  $( "#sort2" ).removeClass( "headerSortUp" );
  $( "#sort3" ).removeClass( "headerSortDown" );
  $( "#sort3" ).removeClass( "headerSortUp" );
  $( "#sort" ).removeClass( "headerSortDown" );
  $( "#sort" ).removeClass( "headerSortUp" );
    if( $( "#sort4" ).hasClass( "headerSortDown" )) {
      $( "#sort4" ).removeClass( "headerSortDown" );
      $( "#sort4" ).addClass( "headerSortUp" );
    } else if ( $( "#sort4" ).hasClass( "headerSortUp" ) ) {
      $( "#sort4" ).addClass( "headerSortDown" );
      $( "#sort4" ).removeClass( "headerSortUp" );
    } else {
      $( "#sort4" ).addClass( "headerSortUp" );
    }
});

if (localStorage.getItem('lightmode') === 'true') {
	  $( "body" ).removeClass( "dark" );
      $( "html" ).removeClass( "dark" );
}