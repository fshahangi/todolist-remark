import React from "react";
import { useLocation } from "react-router-dom";

const SingleProducts = () => {
  const state = useLocation();

  return <div className="todo"> {state.state.title}</div>;
};

export default SingleProducts;
