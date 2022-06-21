/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
 e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

 */

/*
1- chiedere all'utente la distanza in km da percorrere
2- chiedere all'utente l'età
3- calcolare il prezzo della distanza
4- verificare età per applicare eventuale sconto
5- stampare in pagina
6- Bonus
*/


// 1 -
const userKm = prompt('Quanti chilometri vuoi percorrere?', '100');
console.log('distanza viaggio (km): ' + userKm);

// 2 -
const userAge = prompt('Quanti anni hai?', '17');
console.log('Età utente: ' + userAge);

// 3 -
const finalPrice = userKm * 0.21;
console.log('Prezzo per la distanza (€): ' + finalPrice);

// 4 -
if (userAge < 18) {
    let discountMinor = finalPrice - (finalPrice * 0.20);
    console.log('Prezzo scontato minorenni (€): ' + discountMinor);
}

if (userAge > 65) {
    let discountOlder = finalPrice - (finalPrice * 0.40);
    console.log('Prezzo scontato anziani (€): ' + discountOlder);
}

