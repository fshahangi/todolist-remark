import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.request(axiosParams);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;
