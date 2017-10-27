var a;
document.writeln("<h4>Bla Bla Turizm Sundu</h4>");
document.writeln("<h4>1.Orta Avrupa Turu</h4>");
document.writeln("<h4>2.Amerika Turu</h4>");
document.writeln("<h4>3.Uzak Doğu Turu</h4>");

a = window.prompt("Seciminizi yapin:");

switch (parseInt(a)) {
    case 1: {
        document.writeln("<h5>Ucak Viy(3) Budapes(2) Prag(2)</h5>");
        document.writeln("<h5>4 * Oteller O.K 1700$</h5>");
        break;
    }

    case 2: {
        document.write("<H3>UCAK NEW YORK(4)(3) BOSTON.(2) LOS ANGELES(4)<H3>");
        document.write("<H3>5 * OTELLER O.K 3700$<H3>");
        break;
    }

    case 3: {
        document.write("<H3>UCAK BANG KONG(3) HONG KONG.(3) TOKYO(4)<H3>");
        document.write("<H3>5 * OTELLER O.K 4000$<H3>");
        break;
    }

    default: window.alert("SECIMINIZ HATALI...");
}