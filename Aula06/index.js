/* CONSTANTES
const = uma variavel que não pode ser alterada
*/

const PI = 3.14159;
let raio;
let circunferencia;


document.getElementById("MyButton").onclick = function() {
    raio = document.getElementById("MyText").value;
    raio = Number(raio);
    circunferencia = 2 * PI * raio;
    document.getElementById("MyH3").textContent = "Resultado: " + circunferencia + " cm";
}