/*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message like: 
'The film {film} is one of my favorites'.
*/ 
let userName = window.prompt("Dime tu nombre")
let userAge = window.prompt("¿Cuántos años tienes?")
let moviesArray = [];

for (i = 0; i <=2; i++) {
  let valor = prompt("Ingresa tu película favorita")
  moviesArray.push(valor);
}
console.log(`Hola eres ${userName}, tienes ${userAge} años y una de mis películas favoritas es "${moviesArray[1]}".`)



/*Highest number
Write a program that asks for 10 numbers. 
Using logical operators and any other javascript functions/structures you've seen before, 
determine and output the highest of those numbers.
*/
/*
let miArray = [];
for (i = 0; i <10; i++) {
    let valor = prompt(`Ingresa el valor número ${i+1}`)
    miArray.push(valor);
  }
  miArray.sort(function(a, b) {
    return b - a;
  });
console.log(`El número mayor es el ${miArray[0]}`);
*/

/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm 
(message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".*/

/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.*/
/*
let palabra = prompt("Ingresa la palabra para evaluar si es un palíndromo:")
function palindromo(palabra) {
    palabra = palabra.toLowerCase().replace(/\s/g, ''); // Convertir la palabra a minúsculas y quitar los espacios
    return palabra === palabra.split('').reverse().join(''); // Comparar la palabra original con su inversa
  }
  if (palindromo(palabra)) {
    console.log(palabra + ' es un palíndromo');
  } else {
    console.log(palabra + ' no es un palíndromo');
  }
/*
/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/

/*Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc...
let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/