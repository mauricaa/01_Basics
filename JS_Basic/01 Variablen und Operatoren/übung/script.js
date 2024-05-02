const data = "Hans geht heute schwimmen";

let arr(Hans geht)

let split(data);
console.log(data)
if 


const numbers = "1,2,1,4,6,8,7";

let nums = numbers.split(",");
console.log(nums);
for (let i = 0; i < nums, length; i++) {
    const number = parseInt(nums(1));

    sum += number;
}
const.log(sum)




const tempratures = "-1,5,51,-10,-11,2,90,-8,-44";

let arr




const numbers = "8,2,1,4,6,1,8,7";
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

let num = numbers.split(",").map(Number)

let begrenzung = Math.random() * 4 + 4
let begrenzung1 = Math.floor(begrenzung)
let numbers2 = num.filter(element => element >= 4 && element < 8).length
console.log(numbers2)




const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
// const temperaturesWeek2 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// MIttwlwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"
let temperaturFirstWeek = temperaturesWeek1.split(",")
let temperaturSecondWeek = temperaturesWeek2.split(",")
let sum1 = 0;
let sum2 = 0;
temperaturFirstWeek.forEach(element => {
    sum1 += parseInt(element)
});
let mittelwertWeek1 = sum1 / temperaturFirstWeek.length
temperaturSecondWeek.forEach(element => {
    sum2 += parseInt(element)
});
let mittelwertWeek2 = sum2 / temperaturSecondWeek.length
if (mittelwertWeek1 > mittelwertWeek2) {
    console.log("Woche 1 war wärmer")
}
if (mittelwertWeek1 < mittelwertWeek2) {
    console.log("Woche 2 war wärmer")
}
if (mittelwertWeek1 == mittelwertWeek2) {
    console.log("Beide Wochen waren gleich warm")
}