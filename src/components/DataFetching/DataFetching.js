import { useState } from "react";
import axios from "axios";

export const DataFetching = () => {
  const [user, setUser] = useState(null);
  const [searchUsername, setSearchUsername] = useState("");

  const baseURL = process.env.REACT_APP_BASE_URL;

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

  return {
    user,
    searchUsername,
    handleChange,
    handleSubmit,
  };
};
