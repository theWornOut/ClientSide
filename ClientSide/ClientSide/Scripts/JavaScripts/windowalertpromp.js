window.alert("30.01.2017\nJs\n");

var fiyat, miktar, tutar, fiy, mik;
fiyat = window.prompt("Fiyat giriniz..", "0");
miktar = window.prompt("Miktar giriniz.", "0");
fiy = parseInt(fiyat);
mik = parseInt(miktar);
tutar = fiy * mik;

document.writeln("<h2>Fiyat = " + fiyat + "</h2>");
document.writeln("<h2>Miktar = " + miktar + "</h2>");
document.writeln("<h2>Tutar = " + tutar + "</h2>");