import React from 'react';
import { NavLink } from "react-router-dom";

const UserItemContainer = ({ user, adres, style }) => {
  return (
    <div className="col">
      <NavLink to={`/${adres}/${user.id}`}>
        <div className={"card " + (style === "cover" ? "bg-dark text-white" : "h-100")}>
          <img src={user.picture.url} className={style === "cover" ? "card-img" : "card-img-top"} alt={user.firstname}></img>
          <div className={style === "cover" ? "card-img-overlay" : "card-body"}>
            <h2 className="card-title">{user.firstName} {user.lastName}</h2>
            <p className='card-text'>{user.memberType}</p>
          </div>
        </div>
      </NavLink>      
    </div>
  );
};

export default UserItemContainer;