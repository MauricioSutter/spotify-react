import React from "react";
import '../Footer/Footer.css'


const Footer = () => {

    return(

        <footer className="secao-footer">
        <div className="secao-footer__conteudo">
            <span className="text title">Testar o Premium de graça</span>
            <span className="text subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</span>
        </div>
        <button className="secao-footer__botao">
            <span>Inscreva-se grátis</span>
        </button>
    </footer>
    
    
    )
}

export default Footer;