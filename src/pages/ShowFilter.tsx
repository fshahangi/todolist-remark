import React from "react";
import { useParams } from "react-router-dom";

const ShowFilter = () => {
  const params = useParams();
  return <div className="todo">{params.filter}</div>;
};

export default ShowFilter;
