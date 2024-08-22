import prompt from 'prompt-sync';
const ler = prompt();

console.log('Infomre dois números:');
process.stdout.write('>>');
let num1 = Number(ler());
process.stdout.write('>>');
let num2 = Number(ler());

let soma = num1 + num2;

console.log(`${num1} + ${num2} = ${soma}`);