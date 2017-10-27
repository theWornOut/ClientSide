function degis(d) {
    if (d == "buyuk") {
        document.form1.ad.value = document.form1.ad.value.toUpperCase();
        document.form1.soyad.value = document.form1.soyad.value.toUpperCase();
    } else if (d == "kucuk") {
        document.form1.ad.value = document.form1.ad.value.toLowerCase();
        document.form1.soyad.value = document.form1.soyad.value.toLowerCase();
    }
}