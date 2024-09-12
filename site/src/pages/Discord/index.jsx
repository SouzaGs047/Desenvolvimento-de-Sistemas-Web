import React from "react";

import './index.scss';
import Vantagem from "../../components/vantagensNitro";

export default function discordNitro(){
    return (
        <div className="pagina-nitro">
            <h1>Vantagens Nitro Populares</h1>
            <Vantagem titulo="De clipes a fotos, compartilhe à vontade com uploads maiores" imagem="/assets/image/Vantagem-1.svg"/>
            <Vantagem titulo="Faça transmissões de aplicativos e jogos em HD" imagem="/assets/image/Vantagem-2.svg"/>
            <Vantagem titulo="Aumente a empolgação e faça memes com emojis personalizados onde quiser" imagem="/assets/image/Vantagem-3.svg"/>
            <Vantagem titulo="Desbloqueie vantagens para suas comunidades com 2 Impulsos de Servidor" imagem="/assets/image/Vantagem-4.svg"/>
        </div>
    )
        
}