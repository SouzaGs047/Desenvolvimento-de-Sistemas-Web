import prompt from "prompt-sync"
const ler = prompt();

let array = [];
let soma = 0;

console.log('Quantos números você irá digitar:');
let tamanhoArray = Number(ler());

for (let i = 0; i < tamanhoArray; i++) {
    console.log('Digite um número:');
    let numero = Number(ler());

    if (numero === 0) {
        if (array.length > 0) {
            array.pop();  
        }
    } else {
        array.push(numero); 
    }
}

for(let i = 0; i < array.length; i++){
    soma += array[i];
}

if(array.length === 0){
    soma = 0;
}

console.log(soma);
