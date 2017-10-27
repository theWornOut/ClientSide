var number;
number = window.prompt("Enter a number.", "0");
s = parseInt(number);
if (s > 10)
    document.writeln("<h2>" + "Your number is greater than 10" + "</h2>");
else
    document.writeln("<h2>" + "Your number is less than 10" + "</h2>");