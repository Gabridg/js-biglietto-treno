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

const userKm = prompt('Quanti chilometri vuoi percorrere?', '100')
console.log('distanza viaggio (km): ' + userKm)