$(document).ready(function () {
    $("button").click(function () {
        $("#x1").fadeIn();
        $("#x2").fadeIn("slow");
        $("#x3").fadeIn(2000);
    }),
    $("button").click(function () {
        $("#x1").fadeOut();
        $("#x2").fadeOut("slow");
        $("#x3").fadeOut(2000);
    }),
    $("button").click(function () {
        $("#x1").fadeToggle();
        $("#x2").fadeToggle("slow");
        $("#x3").fadeToggle(2000);
    }),
    $("button").click(function () {
        $("#x1").fadeTo("slow", 0.1);
        $("#x2").fadeTo("slow", 0.44);
        $("#x3").fadeTo("slow", 0.90);
    });
});