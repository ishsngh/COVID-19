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
	ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
	li[i].style.display = "none";}
	document.getElementById("searchbar").value = '';
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
        txtValue = li[i].getAttribute("value");
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
        window.localStorage.setItem('pind', String(district+','+state));
		//window.localStorage.setitem('pins', String(state));
		document.getElementById("dispin").innerHTML = "📌 unpin";
    }
}

$(document).click(function (e)
{
    var container = $("#searchbar");

    if (!container.is(e.target))
    {
	ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
	li[i].style.display = "none";}
	document.getElementById("searchbar").value = '';
    }
});

var width1 = parseInt($(window).width() * 0.8);
if (width1 > 500) {
	width1 = 500
}
$("#searchbar").width(width1);
$("#search").width(width1);

// on document ready
$(document).ready(function() {

    // show/hide the mobile menu based on class added to container
    $('.menu-icon').click(function() {
        $(this).parent().toggleClass('is-tapped');
        $('#hamburger').toggleClass('open');
    });

    // handle touch device events on drop down, first tap adds class, second navigates
    $('.touch .sitenavigation li.nav-dropdown > a').on('touchend',
        function(e) {
            if ($('.menu-icon').is(':hidden')) {
                var parent = $(this).parent();
                $(this).find('.clicked').removeClass('clicked');
                if (parent.hasClass('clicked')) {
                    window.location.href = $(this).attr('href');
                } else {
                    $(this).addClass('linkclicked');

                    // close other open menus at this level
                    $(this).parent().parent().find('.clicked').removeClass('clicked');

                    parent.addClass('clicked');
                    e.preventDefault();
                }
            }
        });

    // handle the expansion of mobile menu drop down nesting
    $('.sitenavigation li.nav-dropdown').click(
        function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }

            if ($('.menu-icon').is(':visible')) {
                $(this).find('> ul').toggle();
                $(this).toggleClass('expanded');
            }
        }
    );

    // prevent links for propagating click/tap events that may trigger hiding/unhiding
    $('.sitenavigation a.nav-dropdown, .sitenavigation li.nav-dropdown a').click(
        function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    );

    // javascript fade in and out of dropdown menu
    $('.no-touch .sitenavigation li').hover(
        function() {
            if (!$('.menu-icon').is(':visible')) {
                $(this).find('> ul').fadeIn(100);
            }
        },
        function() {
            if (!$('.menu-icon').is(':visible')) {
                $(this).find('> ul').fadeOut(100);
            }
        }
    );
});

$('document').ready(function () {


		// RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B',
                'font-family': 'Roboto',
				'width':'100%'
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
			
		// Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
      
        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        $("iframe").contents().find('td').css('width', '100%');
      
        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        
      
      
        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '70%',
            'width': 'auto',
			'position': 'relative !important',
            'top': '63px !important',
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%'
        });
        $("iframe").contents().find('.skiptranslate').css({
            'visibility': 'none',
        });
    });
});

$($('span:contains("Select Language")')[1]).html('English')