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
    states();
}

$("#goback").on("click", function() {
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
    data();
});