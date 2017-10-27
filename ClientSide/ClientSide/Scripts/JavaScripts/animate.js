$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({ height: "300px", opacity: "0.4" }, "slow"),
        $("div").animate({
            left: "240px",
            opacity: "+=0.1",
            height: "toggle",
            width: "+=15px"
        });
    });
});