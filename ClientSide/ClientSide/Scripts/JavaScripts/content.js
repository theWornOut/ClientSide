//text pull
$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
});

//html pull
$(document).ready(function () {
    $("#btn2").click(function () {
        alert("Html: " + $("#test").html());
    });
});

//value pull
$(document).ready(function () {
    $("#btn3").click(function () {
        alert("Value: " + $("#test2").val());
    });
});


//attribute pull
$(document).ready(function () {
    $("#btn4").click(function () {
        alert($("#ea").attr("href"));
    });
});

//text-html-val assignment
$(document).ready(function () {
    $("#btn5").click(function () {
        $("#test3").text("Web 101");
    });
    $("#btn6").click(function () {
        $("#test4").html("<b>Web 201</b>");
    });
    $("#btn7").click(function () {
        $("#test5").val("Web 301");
    });
});

//text-html return callback
$(document).ready(function () {
    $("#btn8").click(function () {
        $("#test6").text(function (i, origText) {
            return "Eski metin: " + origText + " Yeni Metin: Ekrem Alpay";
        });
    });
    $("#btn9").click(function () {
        $("#test7").html(function (i, origHtml) {
            return "Eski html: " + origHtml + " Yeni Html: <b>Ekrem Alpay</b>";
        });
    });
});

//attribute assignment
$(document).ready(function () {
    $("#btn10").click(function () {
        $("#ea2").attr("href", "http://ekremalpay.com");
    });
});

//attributes assignment
$(document).ready(function () {
    $("#btn10").click(function () {
        $("#ea3").attr({
            "href": "http://ekremalpay.com",
            "title": "Ekrem Alpay"
        });
    });
});

//attribute return callback
$(document).ready(function () {
    $("#btn11").click(function () {
        $("#ea4").attr("href", function (i, origValue) {
            return origValue + "/konu/jquery";
        });
    });
});