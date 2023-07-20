import { useState } from "react";
import axios from "axios";

export const DataFetching = () => {
  const [user, setUser] = useState(null);
  const [searchUsername, setSearchUsername] = useState("");
  const [showNoUserMessage, setShowNoUserMessage] = useState(false);

  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    setSearchUsername(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = axios.get(baseURL + searchUsername);
      setUser(response.data);
      setShowNoUserMessage(false);
    } catch (error) {
      setUser(null);
      setShowNoUserMessage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return {
    user,
    searchUsername,
    showNoUserMessage,
    handleChange,
    handleSubmit,
  };
};
