import './index.scss'
import { useState } from 'react'

export default function Calculadora() {
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)


    function somar(){
        let r = Number(numero1) + Number(numero2);
        setResultado(r)
    }

    return (
        <div className='pagina-calculadora'>
            <h1>Calculadora</h1>

            <div className='form-calc'>
                <div>
                    <label>Número 1: </label>
                    <input type="number" value={numero1} onChange={e => setNumero1(e.target.value)} />
                </div>

                <div>
                    <label>Número 2: </label>
                    <input type="number" value={numero2} onChange={e => setNumero2(e.target.value)} />
                </div>

                <div id='res'>
                    <div>{resultado}</div>
                </div>

                <div id='botoes'>
                    <button onClick={somar}>Somar</button>
                </div>
            </div>
        </div>
    )
}