function sendData() {
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    localStorage.setItem(key, value);
}