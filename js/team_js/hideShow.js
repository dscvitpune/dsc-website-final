$(document).ready(function () {
    $(".head-hide-member").hide();
    $(".manager-hide-member").hide();
    $(".web-hide-member").hide();
    $(".android-hide-member").hide();
    $(".flutter-hide-member").hide();
    $(".design-hide-member").hide();
    $(".management-hide-member").hide();

    $("#head-hide-button").click(function () {
        var elem = $("#head-hide-button").text()
        if (elem == "Show All") {
            $("#head-hide-button").text("Show Less");
            $(".head-hide-member").slideDown(500);
        } else {
            $("#head-hide-button").text("Show All");
            $(".head-hide-member").slideUp(500);
        }
    });

    $("#manager-hide-button").click(function () {
        var elem = $("#manager-hide-button").text()
        if (elem == "Show All") {
            $("#manager-hide-button").text("Show Less");
            $(".manager-hide-member").slideDown(500);
        } else {
            $("#manager-hide-button").text("Show All");
            $(".manager-hide-member").slideUp(500);
        }
    });

    $("#web-hide-button").click(function () {
        var elem = $("#web-hide-button").text()
        if (elem == "Show All") {
            $("#web-hide-button").text("Show Less");
            $(".web-hide-member").slideDown(500);
        } else {
            $("#web-hide-button").text("Show All");
            $(".web-hide-member").slideUp(500);
        }
    });

    $("#android-hide-button").click(function () {
        var elem = $("#android-hide-button").text()
        if (elem == "Show All") {
            $("#android-hide-button").text("Show Less");
            $(".android-hide-member").slideDown(500);
        } else {
            $("#android-hide-button").text("Show All");
            $(".android-hide-member").slideUp(500);
        }
    });

    $("#flutter-hide-button").click(function () {
        var elem = $("#flutter-hide-button").text()
        if (elem == "Show All") {
            $("#flutter-hide-button").text("Show Less");
            $(".flutter-hide-member").slideDown(500);
        } else {
            $("#flutter-hide-button").text("Show All");
            $(".flutter-hide-member").slideUp(500);
        }
    });

    $("#design-hide-button").click(function () {
        var elem = $("#design-hide-button").text()
        if (elem == "Show All") {
            $("#design-hide-button").text("Show Less");
            $(".design-hide-member").slideDown(500);
        } else {
            $("#design-hide-button").text("Show All");
            $(".design-hide-member").slideUp(500);
        }
    });

    $("#management-hide-button").click(function () {
        var elem = $("#management-hide-button").text()
        if (elem == "Show All") {
            $("#management-hide-button").text("Show Less");
            $(".management-hide-member").slideDown(500);
        } else {
            $("#management-hide-button").text("Show All");
            $(".management-hide-member").slideUp(500);
        }
    });
});