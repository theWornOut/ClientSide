function recursive(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        return n * recursive(n - 1);
    }
}

for (var i = 5; i <= 20; i = i + 3) {
    document.writeln("<h4>" + i + "!=" + recursive(i) + "</h4>");
}