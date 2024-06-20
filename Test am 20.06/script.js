//Multipliziere alle ungeraden Zahlen miteinander
// und dividiere durch die Anzahl der geraden Zahlen
// (2*4*2...)/6
const data1 = "5,2,3,4,1,2,3,5,10,-11";

const number = data1.split(",");


let summe = 1;
for (let i = 2; i < numbers.length; i += 3) {
    summe *= numbers[i];
}


const geradezahlen = nubers.filter(num => num % 2 === 0).length;

const result = summe * geradezahlen;

console.log(`Das Ergebnis ist:` + result + "!");








