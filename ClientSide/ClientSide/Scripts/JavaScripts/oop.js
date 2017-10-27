function personal(name, wagesperhour) {
    this.name = name;
    this.wagesperhour = wagesperhour;
    this.fee = fee;
}

function fee(hour) {
    return this.wagesperhour * hour;
}

personel = new personal("Ekrem", 50);

hour = parseInt(window.prompt("The staff the amount of hours worked:", "0"));
wage = personel.fee(hour);

document.write("<H3>Personel Name=" + personel.name + "</H3>");
document.write("<H3>Hour of Work=" + hour + "</H3>");
document.write("<H3>Wage Per Hour=" + personel.wagesperhour + "</H3>");
document.write("<H3>Wage=" + wage + "</H3>");

function car(brand, model, year, color, staff) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.staff = staff;
    this.carInformation = carInformation;
}

function carInformation() {
    var information = this.year + " " + this.brand + " " + this.model + " " + this.color + " " + this.staff.name;
    document.write("<h3>" + information + "</h3>");
}

function staff(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

staff = new staff("Ekrem", 25, "Male");
car = new car("Opel", "Astra", 2005, "Gray", staff);
car.carInformation();