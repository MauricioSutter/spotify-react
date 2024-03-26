import React from "react";
import "../CardArtistas/CardsArtistas.css";

const CardArtista = (props) => {
  return (
    <div className="artist-card">
      <div className="card-img">
        <img id="artist-img" className="artist-img" src={props.url} alt="" />
        <div className="play">
          <span className="fa fa-solid fa-play"></span>
        </div>
      </div>
      <div className="card-text">
        <a title={props.name} className="vst" href={props.url}>
          <span className="artist-name" id="artist-name">
            {props.name}
          </span>
          <span className="artist-categorie">{props.genre}</span>
        </a>
      </div>
    </div>
  );
};

export default CardArtista;
