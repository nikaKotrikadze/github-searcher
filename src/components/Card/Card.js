import React from "react";
import cardStyles from "./cardStyles.module.css";

const Card = ({ user }) => {
  return (
    <div className={cardStyles.cardContainer}>
      <div className={cardStyles.cardImageContainer}>
        <img
          src={user.avatar_url}
          alt={user.login}
          className={cardStyles.cardImage}
        />
        {user.login && <h4>login : {user.login}</h4>}
        {user.bio && <h4>bio : {user.bio}</h4>}
        {user.public_repos === 0 ? (
          ""
        ) : (
          <h5>total projects done: {user.public_repos}</h5>
        )}
        {user.name && <h5>name : {user.name}</h5>}
        {user.location && <h5>from : {user.location}</h5>}
        <a href={user.html_url} target="_blank" rel="noreferrer">
          {user.html_url}
        </a>
      </div>
    </div>
  );
};

export default Card;
