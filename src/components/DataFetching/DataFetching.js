import { useState } from "react";
import axios from "axios";

export const DataFetching = () => {
  const [user, setUser] = useState(null);
  const [searchUsername, setSearchUsername] = useState(null);

  const baseURL = process.env.GITHUB_KEY;

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

  console.log(user);
  return {
    user,
    searchUsername,
    handleChange,
    handleSubmit,
  };
};
