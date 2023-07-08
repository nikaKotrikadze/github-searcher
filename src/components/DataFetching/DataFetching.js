import React, { useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [user, setUser] = useState(null);
  const [searchUsername, setSearchUsername] = useState(null);

  const baseURL = "https://api.github.com/users/";

  const handleChange = (e) => {
    setSearchUsername(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(baseURL + searchUsername)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        setUser(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <label>Find Anyone on Github with a username</label>
        <input onChange={handleChange} value={searchUsername} type="text" />
        <h1>You are searching for {searchUsername ? searchUsername : "..."}</h1>
        <button type="submit">Search</button>
      </form>
      {user ? (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
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
              backgroundColor: "grey",
              minWidth: 500,
              padding: 20,
              borderRadius: 20,
            }}
          >
            <img src={user.avatar_url} alt={user.login} width={50} />
            {user.login && <h4>login : {user.login}</h4>}
            {user.name && <h5>name : {user.name}</h5>}
            {user.location && <h5>from : {user.location}</h5>}
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.html_url}
            </a>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <p>There is no user with the username: {searchUsername}</p>
        </div>
      )}
    </div>
  );
};

export default DataFetching;
