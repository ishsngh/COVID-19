var lightmode = document.getElementById('inner-switch');
var stateclass = {};

$(".inner-switch").on("click", function() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("html").removeClass("dark");
        localStorage.setItem('lightmode', 'true');
    } else {
        $("body").addClass("dark");
        $("html").addClass("dark");
        localStorage.setItem('lightmode', 'false');
    }
});

$("#sortswitch").on("click", function() {
    if ($("table").hasClass("today")) {
        $("table").removeClass("today");
    } else {
        $("table").addClass("today");
    }
    if ($("#sort").hasClass("headerSortDown")) {
        sortTable(0);
        //sortTable(0);	
    } else if ($("#sort1").hasClass("headerSortDown")) {
        sorttable(1);
        //sorttable(1);
    } else if ($("#sort2").hasClass("headerSortDown")) {
        sorttable(2);
        //sorttable(2);
    } else if ($("#sort3").hasClass("headerSortDown")) {
        sorttable(3);
        //sorttable(3);
    } else if ($("#sort4").hasClass("headerSortDown")) {
        sorttable(4);
        //sorttable(4);	
    } else if ($("#sort5").hasClass("headerSortDown")) {
        sorttable(5);
        //sorttable(4);	
    } else if ($("#sort5").hasClass("headerSortDown")) {
        sorttable(6);
        //sorttable(4);	
    } else if ($("#sort").hasClass("headerSortUp")) {
        sortTable(0);
        sortTable(0);
    } else if ($("#sort1").hasClass("headerSortUp")) {
        sorttable(1);
        sorttable(1);
    } else if ($("#sort2").hasClass("headerSortUp")) {
        sorttable(2);
        sorttable(2);
    } else if ($("#sort3").hasClass("headerSortUp")) {
        sorttable(3);
        sorttable(3);
    } else if ($("#sort4").hasClass("headerSortUp")) {
        sorttable(4);
        sorttable(4);
    } else if ($("#sort5").hasClass("headerSortUp")) {
        sorttable(5);
        sorttable(5);
    } else if ($("#sort6").hasClass("headerSortUp")) {
        sorttable(6);
        sorttable(6);
    }
});

if (localStorage.getItem('lightmode') === 'true') {
    $("body").removeClass("dark");
    $("html").removeClass("dark");
}

function getdata(state) {
    stateclass = state.id;
    $("html").addClass(state.id);
    $("#world1").addClass('hide');
    $("#mainback").removeClass('hide');
    $("#statetext").addClass('hide');
    $("#space").addClass('hide');
    $("#table").empty();
    $("#foot").empty();
    $("#covid4").empty();
    $("#covid3").addClass('hide');
    $("#table").empty();
    $("#title").empty();
    $("#tests").empty();
	$("#covid").empty();
	$("#covid19").empty();
	$('#covidcases').empty();
	chartlinestate();
	chartlinestate1();
    states();
	$('#curvetext').empty();
	$("#curvetext").removeClass('curve');
	$('#curve_chart').empty();
}

function dataempty() {
    $("#mainback").addClass('hide');
    $("#space").removeClass('hide');
    $("#statetext").removeClass('hide');
    $("#world1").removeClass('hide');
    $("#covid3").removeClass('hide');
    $("html").removeClass(stateclass);
    $("#table").empty();
    $("#title").empty();
    $("#tests").empty();
    $("#world").empty();
    $("#covid4").empty();
    $("#covid3").empty();
    $("#foot").empty();
    $("#tabletitle").empty();
	$("#covid").empty();
	$('#covidcases').empty();
	$("#covid19").empty();
    data();
	covidpie();
	chartline2();
	chartstates();
	$('#curvetext').empty();
	$("#curvetext").removeClass('curve');
	$('#curve_chart').empty();
}

function search() {
	var tr=0;
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
		if ((filter != '') && (tr < 11)) {
            li[i].style.display = "";
			tr += 1;
		} else {
            li[i].style.display = "none";
        }		
        } else {
            li[i].style.display = "none";
        }
    }
}

function dataempty1() {
    $("#mainback").addClass('hide');
    $("#space").removeClass('hide');
    $("#statetext").removeClass('hide');
    $("#world1").removeClass('hide');
    $("#covid3").removeClass('hide');
    $("#table").empty();
    $("#title").empty();
    $("#tests").empty();
    $("#world").empty();
    $("#covid4").empty();
    $("#covid3").empty();
    $("#foot").empty();
	$("#covid").empty();
	$('#covidcases').empty();
	$("#covid19").empty();
	$('#curvetext').empty();
	$("#curvetext").removeClass('curve');
	$('#curve_chart').empty();
}

function closedis() {
    if ($(".dis .data").hasClass("hide")) {
        $(".dis .data").removeClass("hide");
		$(".dis .data").addClass("disin");
		$("#dispin").removeClass("hide");
		$("#dispin").addClass("disin");
		document.getElementById("disclose").innerHTML = "ᐃ";
    } else {
        $(".dis .data").addClass("hide");
		$(".dis .data").removeClass("disin");
		$("#dispin").addClass("hide");
		$("#dispin").removeClass("disin");
		document.getElementById("disclose").innerHTML = "ᐁ";
    }
}

function pin(x) {
	var district=x.getAttribute("dis");
	var state=x.getAttribute("sta");
    if ($("body").hasClass("pin")) {
        window.localStorage.setItem('pind', '');
		//window.localStorage.setitem('pins', '');
		$("body").removeClass("pin");
		document.getElementById("dispin").innerHTML = "📌 pin";
    } else {
        $("body").addClass("pin");
        window.localStorage.setItem('pind', String(district+' '+state));
		//window.localStorage.setitem('pins', String(state));
		document.getElementById("dispin").innerHTML = "📌 unpin";
    }
}

var width1 = parseInt($(window).width() * 0.8);
if (width1 > 500) {
	width1 = 500
}
$("#searchbar").width(width1);
$("#search").width(width1);