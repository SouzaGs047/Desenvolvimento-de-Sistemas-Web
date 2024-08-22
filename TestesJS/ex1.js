import  prompt from 'prompt-sync';
const ler = prompt();


console.log('Imforme um número:');
let num = ler();

let dobro = num * 2;

console.log(`O dobro de ${num} é ${dobro}`);