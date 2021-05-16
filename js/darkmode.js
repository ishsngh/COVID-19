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
	if( $( "#sort" ).hasClass( "headerSortDown" )) {
	sortTable(0);
	//sortTable(0);	
	} else if( $( "#sort1" ).hasClass( "headerSortDown" )) {
	sorttable(1);
	//sorttable(1);
	} else if( $( "#sort2" ).hasClass( "headerSortDown" )) {
	sorttable(2);
	//sorttable(2);
	} else if( $( "#sort3" ).hasClass( "headerSortDown" )) {
	sorttable(3);
	//sorttable(3);
	} else if( $( "#sort4" ).hasClass( "headerSortDown" )) {
	sorttable(4);
	//sorttable(4);	
	} else if( $( "#sort5" ).hasClass( "headerSortDown" )) {
	sorttable(5);
	//sorttable(4);	
	} else if( $( "#sort5" ).hasClass( "headerSortDown" )) {
	sorttable(6);
	//sorttable(4);	
	} else if( $( "#sort" ).hasClass( "headerSortUp" )) {
	sortTable(0);
	sortTable(0);	
	} else if( $( "#sort1" ).hasClass( "headerSortUp" )) {
	sorttable(1);
	sorttable(1);
	} else if( $( "#sort2" ).hasClass( "headerSortUp" )) {
	sorttable(2);
	sorttable(2);
	} else if( $( "#sort3" ).hasClass( "headerSortUp" )) {
	sorttable(3);
	sorttable(3);
	} else if( $( "#sort4" ).hasClass( "headerSortUp" )) {
	sorttable(4);
	sorttable(4);
	} else if( $( "#sort5" ).hasClass( "headerSortUp" )) {
	sorttable(5);
	sorttable(5);	
	} else if( $( "#sort6" ).hasClass( "headerSortUp" )) {
	sorttable(6);
	sorttable(6);		
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
  $( "#sort5" ).removeClass( "headerSortDown" );
  $( "#sort5" ).removeClass( "headerSortUp" );
  $( "#sort6" ).removeClass( "headerSortDown" );
  $( "#sort6" ).removeClass( "headerSortUp" );  
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
  $( "#sort5" ).removeClass( "headerSortDown" );
  $( "#sort5" ).removeClass( "headerSortUp" );
  $( "#sort6" ).removeClass( "headerSortDown" );
  $( "#sort6" ).removeClass( "headerSortUp" );
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
  $( "#sort5" ).removeClass( "headerSortDown" );
  $( "#sort5" ).removeClass( "headerSortUp" );
  $( "#sort6" ).removeClass( "headerSortDown" );
  $( "#sort6" ).removeClass( "headerSortUp" );
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
  $( "#sort5" ).removeClass( "headerSortDown" );
  $( "#sort5" ).removeClass( "headerSortUp" );
  $( "#sort6" ).removeClass( "headerSortDown" );
  $( "#sort6" ).removeClass( "headerSortUp" );
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
  $( "#sort5" ).removeClass( "headerSortDown" );
  $( "#sort5" ).removeClass( "headerSortUp" );
  $( "#sort6" ).removeClass( "headerSortDown" );
  $( "#sort6" ).removeClass( "headerSortUp" );
});

$( "#sort5" ).on("click", function() {
  $( "#sort1" ).removeClass( "headerSortDown" );
  $( "#sort1" ).removeClass( "headerSortUp" );
  $( "#sort2" ).removeClass( "headerSortDown" );
  $( "#sort2" ).removeClass( "headerSortUp" );
  $( "#sort3" ).removeClass( "headerSortDown" );
  $( "#sort3" ).removeClass( "headerSortUp" );
  $( "#sort" ).removeClass( "headerSortDown" );
  $( "#sort" ).removeClass( "headerSortUp" );
  $( "#sort4" ).removeClass( "headerSortDown" );
  $( "#sort4" ).removeClass( "headerSortUp" );
  $( "#sort6" ).removeClass( "headerSortDown" );
  $( "#sort6" ).removeClass( "headerSortUp" );
});

$( "#sort6" ).on("click", function() {
  $( "#sort1" ).removeClass( "headerSortDown" );
  $( "#sort1" ).removeClass( "headerSortUp" );
  $( "#sort2" ).removeClass( "headerSortDown" );
  $( "#sort2" ).removeClass( "headerSortUp" );
  $( "#sort3" ).removeClass( "headerSortDown" );
  $( "#sort3" ).removeClass( "headerSortUp" );
  $( "#sort" ).removeClass( "headerSortDown" );
  $( "#sort" ).removeClass( "headerSortUp" );
  $( "#sort5" ).removeClass( "headerSortDown" );
  $( "#sort5" ).removeClass( "headerSortUp" );
  $( "#sort4" ).removeClass( "headerSortDown" );
  $( "#sort4" ).removeClass( "headerSortUp" );
});

if (localStorage.getItem('lightmode') === 'true') {
	  $( "body" ).removeClass( "dark" );
      $( "html" ).removeClass( "dark" );
}