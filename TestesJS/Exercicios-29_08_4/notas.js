import prompt from 'prompt-sync'
const ler = prompt();

let notas = [];

console.log('Digite uma nota: ');
let nota = ler();

while(num != -1){
    console.log('Digite uma nota: ');
    notas.push(num);
    nota = Number(ler());
}

let filtro = notas.filter(nota => nota <= 10 && nota >= 0);

let soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += filtro[0];
}

let media = soma / filtro.length;

console.log('Notas fornecidas:', notas);
console.log('Notas filtradas:', filtro);
console.log('Média', media);