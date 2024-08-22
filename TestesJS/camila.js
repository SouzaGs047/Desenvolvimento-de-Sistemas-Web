import prompt from "prompt-sync"
const ler = prompt();


console.log('Informe três número:');
process.stdout.write('>> ');
let idade1 = Number(ler());

let idade2 = Number(ler());

let idade3 = Number(ler());

if(idade1 <= idade2 && idade1 >= idade3 || idade1 <= idade2 && idade1 >= idade3){
    console.log(`a idade da camila é ${idade1}`);
}else if(idade2 <= idade1 && idade2 >= idade3 || idade2 >= idade1 && idade2 <= idade3){
    console.log(`a idade da camila é ${idade2}`);
} else if(idade3 <= idade2 && idade3 >= idade1 || idade3 <= idade1 && idade3 >= idade2){
    console.log(`a idade da camila é ${idade3}`);
}
