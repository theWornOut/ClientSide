function body(kar, lstring) {
    val = false;
    for (var i = 1; i < lstring.length; i++) {
        if (lstring.substring(i, i + 1) == kar) {
            val = true;
            break;
        }
    }
    return val;
}

function emailControl() {
    if (body("@", document.form1.email.value)) {
        document.form1.submit();
    } else {
        alert("Email error.");
        return false;
    }
}