var x, y, z;
x = 4;
y = 8;
z = x++ + y--;

document.writeln("<h4>x =" + x + "</h4>");
document.writeln("<h4>y =" + y + "</h4>");
document.writeln("<h4>z =" + z + "</h4>");

var m;
m = ++x - --y + z++;
document.write("<h5>x=" + x + "</h5>");
document.write("<h5>y=" + y + "</h5>");
document.write("<h5>z=" + z + "</h5>");
document.write("<h5>m=" + m + "</h5>");