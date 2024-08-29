import prompt from "prompt-sync"
const ler = prompt();

let estudantes;
let litros;
let mililitros;

let total = 0;

console.log('Informe o número de estudantes:');
estudantes = Number(ler());

console.log('Informe a quantidade de café à se fazer:');
litros = Number(ler()) * 1000;

console.log('Informe quantas mililitros os estudantes bebem:');
mililitros = Number(ler());

let minimo = estudantes * mililitros;

while (total < minimo) {
    total += litros;
}

console.log(total / 1000);