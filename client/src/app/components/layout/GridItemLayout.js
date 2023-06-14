import React from 'react';
import { NavLink } from "react-router-dom";

const GridItemContainer = ({ card, adres, style }) => {
  return (
    <div className="col">
      <NavLink to={`/${adres}/${card.id}`}>
        <div className={"card " + (style === "cover" ? "bg-dark text-white" : "h-100")}>
          <img src={card.thumbnailUrl} className={style === "cover" ? "card-img" : "card-img-top"} alt={card.title}></img>
          <div className={style === "cover" ? "card-img-overlay" : "card-body"}>
            <h2 className="card-title">{card.title}</h2>
            <p className='card-text'>{card.synopsis}</p>
          </div>
        </div>
      </NavLink>      
    </div>
  );
};

export default GridItemContainer;