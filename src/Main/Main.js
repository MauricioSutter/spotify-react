import React from "react";
import "../Main/Main.css";
import Cards_Type from "./cards";
import CardArtista from "../CardArtistas";

const Main = (props) => {
  //console.log(props.playlistcontainer)

  return (
    <main>
      <div className="playlist-container">
        <div id="result-playlists" style={{ display: props.resultplaylist }}>
          <div className="playlist">
            {/* COLOCAR O BOM DIA | BOA TARDE | BOA NOITE */}
            <h1 id="greeting">Olá</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          <div className="offer__scroll-container">
            <section className="offer__list-item">
              {Cards_Type.map((Cards_Type, index) => {
                return (
                  <a id={index} href="tentativa" className="cards">
                    <div className={Cards_Type.class}>
                      <img src={Cards_Type.img} alt="" />
                      <span>{Cards_Type.nome}</span>
                    </div>
                  </a>
                );
              })}
            </section>
          </div>
        </div>

        <div
          className="offer__scroll-container-busca"
          id="result-artist"
          style={{ display: props.resultartist }}
        >
          <div className="grid-container">
            {props.retornoArtistas.map((artistas) => (
              <CardArtista
                name={artistas.name}
                genre={artistas.genre}
                url={artistas.urlImg}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
