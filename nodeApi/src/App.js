import express from 'express';
const servidor = express();
servidor.use(express.json())

servidor.get('/calculadora/somar/:n1/:n2' , (req,resp) => {
    let numero1 = Number(req.params.n1);
    let numero2 = Number(req.params.n2)

    let soma = numero1 + numero2;

    resp.send('A soma é' + soma);
})

servidor.post('/escola/media', (req, resp) => {
    try {
        let notas = req.body;

        nota1 = 

        if (!notas.nota1 || !notas.nota2 || !notas.nota3) {
            throw new Error('VAZIO NÃO CARA')
        }

        if(notas.nota1 < 0 || notas.nota2 < 0 || notas.nota3 < 0){
            throw new Error('Tem que ser maior que 0')
        }

        if(isNaN(notas.nota1) || isNaN(notas.nota2) || isNaN(notas.nota3)){
            throw new Error('Não é número')
        }
    
        let m = (notas.nota1 + notas.nota2 + notas.nota3) / 3;

        let s = '';
        if (m >= 6) {
            s = 'Aprovado';
        }
        else {
            s = 'DP';
        }

        resp.send({
            media: m,
            situacao: s
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }  
}) 



servidor.listen(5010, () => console.log('API subiu na porta 5010'));