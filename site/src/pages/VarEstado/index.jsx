import './index.scss';
import { useState } from 'react';


export default function VarEstado(){

    const [contador, setContador] = useState(0)

    let titulo = 'Contador'

    function incrementar(){
        setContador(contador + 1);
    }

return (
    <div className='pagina-var-estado'>
        <h1>Variáveis de Estado</h1>

        <div className='contador'>
            <h2>{titulo}</h2>
            <span>{contador}</span>
            <button onClick={incrementar}> Incrementar</button>
        </div>
    </div>
)
}