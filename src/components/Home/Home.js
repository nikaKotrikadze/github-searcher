import React from "react";
import Card from "../Card/Card";
import { DataFetching } from "../DataFetching/DataFetching";

const Home = () => {
  const { user, searchUsername, handleChange, handleSubmit } = DataFetching();
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
        <label>Find Anyone on Github with their username</label>
        <input onChange={handleChange} value={searchUsername} type="text" />
        <h1>You are searching for {searchUsername ? searchUsername : "..."}</h1>
        <button
          type="submit"
          style={{
            backgroundColor: "#5078f2",
            backgroundImage: "linear-gradient(315deg, #5078f2 0%, #efe9f4 74%)",
            border: "none",
            borderRadius: 5,
            color: "white",
            width: 200,
            height: 50,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: 30,
              backgroundColor: "#ffffff",
              backgroundImage:
                "linear-gradient(315deg, white 40%, #5899e2 60%)",

              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozBackgroundClip: "text",
              MozTextFillColor: "transparent",
            }}
          >
            Search
          </h1>
        </button>
      </form>
      {user && <Card user={user} />}
      {searchUsername && !user && (
        <div style={{ marginTop: "20px" }}>
          <p>There is no user with the username: {searchUsername}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
