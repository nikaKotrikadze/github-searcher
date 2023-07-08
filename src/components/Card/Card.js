import React from "react";

const Card = ({ user }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2a2a72",
          backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
          color: "white",
          minWidth: 300,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <img
          src={user.avatar_url}
          alt={user.login}
          width={100}
          style={{ borderRadius: 50 }}
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
