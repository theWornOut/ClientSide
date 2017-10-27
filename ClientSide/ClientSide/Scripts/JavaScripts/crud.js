//append
$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").append("<b> Insert</b>");
    });

    $("#btn2").click(function () {
        $("ol").append("<li> Insert</li>");
    });
});

//prepend
$(document).ready(function () {
    $("#btn3").click(function () {
        $("p").prepend("<b> Öne eklenen metin</b>. ");
    });
    $("#btn4").click(function () {
        $("ol").prepend("<li> Öne eklenen liste elemanı</li>");
    });
});

//before-after
$(document).ready(function () {
    $("#btn5").click(function () {
        $("img").before("<b> ONCE </b>");
    });

    $("#btn6").click(function () {
        $("img").after("<i> SONRA </i>");
    });
});

//after text - html - jquery - dom - image
function afterText() {
    var metin1 = "<b> BOGAZICI </b>";
    var metin2 = $("<i></i>").text(" SEN ");
    var metin3 = document.createElement("b");
    metin3.innerHTML = " GONULLER DIYARI ";
    $("img").after(metin1, metin2, metin3);
}

//remove
$(document).ready(function () {
    $("#btn7").click(function () {
        $("#pat").remove();
    });
});

//empty
$(document).ready(function () {
    $("#btn8").click(function () {
        $("#div1").empty();
    });
});

//choose for remove
$(document).ready(function () {
    $("#btn9").click(function () {
        $("p").remove(".italicRemove");
    });
});