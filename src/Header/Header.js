import React, {useState} from "react";
import "./Header.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = (props) => {
  
  const [procura, setProcura] = useState(''); 


  const handleChange = (event) => {
    
    props.cardsBusca(event.target.value)
  };

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="seta-esquerda">
          <img src={smallLeft} alt="" />
        </button>
        <button className="seta-direita">
          <img src={smallRight} alt="" />
        </button>
      </div>

      <div className="busca__header">
        <img src={search} alt="" />
        <input
          id="procura-input"
          type="text"
          maxLength="800"
          placeholder="O que você quer ouvir?"
          onChange={handleChange}
          valor={procura}
          digitaBusca={valor => setProcura(valor)}
        />
      </div>

      <div className="login__header">
        <button className="inscrever">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
