var data = false;

function dataControl() {
    if (document.form1.character.value.length == 5) {
        return true;
    } else {
        alert("Enter 5 characters " + document.form1.character.value + " character is not valid.");
        return false;
    }
}