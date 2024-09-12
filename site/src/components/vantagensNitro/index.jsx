import './index.scss';

export default function Vantagem(props){
    return (
        <div className="comp-vantagem">
            <h1>{props.titulo}</h1>
            <img src={props.imagem} alt="" />
        </div>
    )    
}