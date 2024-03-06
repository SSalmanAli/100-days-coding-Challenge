// Stripping Names

let x = "Syed Salman Ali";
console.log(x);

let y ="\t\t\t\t Salman \t\t\t\t\t\t";
console.log(y);
console.log(y.trim());

let z ="\n\t\t\t syed salman ali \t\t\t\t"; // will not work in between full names like \t\t\t\n\t syed /t/t/n salman /t/t ali \t\n\t
console.log(z);
console.log(z.trim());


