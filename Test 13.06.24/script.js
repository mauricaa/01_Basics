

// Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen
// (5 * 4 * 3) / 3
const data1 = "5,2,3,4,1,2,3,5";



const numbers = data1.split(",");
let summe = 1;
for (let i = 2; i < numbers.length; i += 3) {
    summe *= numbers[i];
}

const geradezahlen = numbers.filter(num => num % 2 === 0).length;

const result = summe / geradezahlen;

console.log(`Das Ergebnis ist:` + result + "!");
