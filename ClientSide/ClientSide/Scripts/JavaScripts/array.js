poets("","Cemal Süreya", "Attilâ İlhan", "Tevfik Fikret", "Nazım Hikmet Ran");

function poets(par) {
    document.write("<" + par + "l>");
    for (var i = 1; i < poets.arguments.length; i++) {
        document.write("<li>" + poets.arguments[i]);
        document.write("</" + par + "l>");
    }
}