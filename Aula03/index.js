// OPERADORES ARITIMETICOS

let aluno = 20;

//aluno = aluno + 1;
//aluno = aluno - 1;
//aluno = aluno * 2;
//aluno = aluno / 2;
//aluno = aluno ** 2;    //--> Elevado ao quadrado
//aluno = aluno % 3;     //--> Chama MODULO (Resto da divisão)

//aluno += 1;
//aluno -= 1;
//aluno *= 2;
//aluno /= 2;
//aluno **=2;
//aluno %= 2;

//aluno ++;
//aluno --;

/* precedencia de operadores
1º Parenteses   ()
2º expoentes    **
3º Multiplicação, Divisão e Modulo  * / %
4º Soma e Subtração     + -
*/

/*
let resultado = 1 + 2 * 3 + 4 ** 2;
    O calculo seria    
        4^2 = 16 
            2 * 3= 6; 6 + 1= 7 
                16 + 7 = 23


let resultado = 12 % 5 + 8 / 2;
    O calculo seria    
        12 % 5 = 2 
            8 / 2 = 4;
                2 + 4 = 6    
*/

let resultado = 6 / 2 ** (2 + 5);
/*  
    O calculo seria    
        (2 + 5) = 7
            2^7 = 128
                6 / 128 = 0.046875                    
*/

document.getElementById('p1').textContent = `A o resultado sera: ${resultado}`;

