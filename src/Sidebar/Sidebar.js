import React from "react";
import '../Sidebar/Sidebar.css'
import logo_spotify from '../assets/icons/logo-spotify.png'


const Sidebar = () => {

    return(

    <div className="sidebar">
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="adasdsd">
                    <img src={logo_spotify} alt="logo da empresa" />
                </a>
            </div>
                <div>
                    <ul>
                        <li>
                            <a href="asdadad">                            
                                <span className="fa fa-home"></span>                                                        
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="asdasdas">                            
                                <span className="fa fa-search"></span>                                                        
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </div>
        </nav>
        
        <div className="sidebar_biblioteca">            
            <div className="conteudo__biblioteca">
                <button className="botao__biblioteca">
                    <span className="fa fas fa-book"></span>
                    <span> Sua Biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>

            <section className="secao-playlist">
                <div className="secao-playlist__conteudo">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar!</span>
                    <button className="secao-playlist__botao">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
                <a href="asdasdasdasd">Cookies</a>
            </div>

            <div className="idiomas">
                <button className="idiomas__botao">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>

    </div>
    )
};

export default Sidebar;