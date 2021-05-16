function sortTable(n,id) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
		$(id).removeClass( "headerSortDown" );
        $(id).addClass( "headerSortUp" );
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
	    $(id).removeClass( "headerSortUp" );
        $(id).addClass( "headerSortDown" );
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sorttable(n,id) {
var table, rows, switching, i, x1, x2, y1, y2, x, y, shouldSwitch, dir, switchcount = 0;

table = document.getElementById("table");
switching = true;
dir = "desc";
while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if( $( "table" ).hasClass( "today" )) {
          x1 = x.innerHTML.split('+')[1];
          if (x1 != undefined) {
            var cmpX=parseInt(x1.split(' ')[0]);
             } else {
			 if (x.innerHTML.split('-')[7] != undefined) {
			 x2= '-' + x.innerHTML.split('-')[7]
			 var cmpX=parseInt(x2);
			} else {
				if (dir == "desc") {
					var cmpX= -100000000;
				} else {
					var cmpX= 100000000;}
				}
			 }
          y1 = y.innerHTML.split('+')[1];
          if (y1 != undefined) {
            var cmpY=parseInt(y1.split(' ')[0]);
            } else {
			 if (y.innerHTML.split('-')[7] != undefined) {
			 y2= '-' + y.innerHTML.split('-')[7]
			 var cmpY=parseInt(y2);
			 } else {
				if (dir == "desc") {
					var cmpY= -100000000;
				} else {
					var cmpY= 100000000;}
				}
			 }
        } else {
            var cmpX=isNaN(parseInt(x.innerHTML.split('<div class="confirm">')[1]))?x.innerHTML.toLowerCase():parseInt(x.innerHTML.split('<div class="confirm">')[1]);
            var cmpY=isNaN(parseInt(y.innerHTML.split('<div class="confirm">')[1]))?y.innerHTML.toLowerCase():parseInt(y.innerHTML.split('<div class="confirm">')[1]);
        }
cmpX=(cmpX=='-')?0:cmpX;
cmpY=(cmpY=='-')?0:cmpY;
        if (dir == "asc") {
			$(id).removeClass( "headerSortDown" );
			$(id).addClass( "headerSortUp" );
            if (cmpX > cmpY) {
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
			$(id).removeClass( "headerSortUp" );
			$(id).addClass( "headerSortDown" );
            if (cmpX < cmpY) {
                shouldSwitch= true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
    } else {
        if (switchcount == 0 && dir == "desc") {
            dir = "asc";
            switching = true;
        }
    }
}
}