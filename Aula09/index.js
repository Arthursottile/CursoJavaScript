/* Gerador de Numeros aleatórios

let randomNum = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6 sem decimais
*/


const button = document.getElementById('button');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

button.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;

    randomNum2 = Math.floor(Math.random() * max) + min;
    label2.textContent = randomNum2;

    randomNum3 = Math.floor(Math.random() * max) + min;
    label3.textContent = randomNum3;
}