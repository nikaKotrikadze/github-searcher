import React from "react";
import Card from "../Card/Card";
import { DataFetching } from "../DataFetching/DataFetching";
import homeStyles from "./homeStyles.module.css";
const Home = () => {
  const { user, searchUsername, handleChange, handleSubmit } = DataFetching();
  return (
    <div>
      <form className={homeStyles.formContainer} onSubmit={handleSubmit}>
        <label className={homeStyles.inputLabel}>
          Find Anyone on Github with their username
        </label>
        <input
          onChange={handleChange}
          value={searchUsername || ""}
          type="text"
          className={homeStyles.usernameInput}
        />
        <h1>You are searching for {searchUsername ? searchUsername : "..."}</h1>
        <button type="submit" className={homeStyles.usernameButton}>
          <h1 className={homeStyles.usernameButtonText}>Search</h1>
        </button>
      </form>
      {user && <Card key={user.id} user={user} />}
      {!user && (
        <div className={homeStyles.noUserContainer}>
          <p>There is no user with the username: {searchUsername}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
