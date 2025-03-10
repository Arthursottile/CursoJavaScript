// Aceitar Input do Usuário

/* Jeito bunrro = Window Prompt
   Jeito Mito = Input do HTML
*/

/*
Jeito Bunrro = Window Prompt
    username = window.prompt("Digite seu nome: ");
    console.log(username);
*/

let username;

document.getElementById('MyEnviar').onclick = function() {
    username = document.getElementById('MyUsername').value;
    document.getElementById('MyH1').textContent = `Olá, ${username}`;
}