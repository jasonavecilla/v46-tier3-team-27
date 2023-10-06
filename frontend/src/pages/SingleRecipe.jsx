import React from "react";
import { useParams } from "react-router";

const SingleRecipe = () => {
  const { id } = useParams();

  return <div>Single Recipe id: {id}</div>;
};

export default SingleRecipe;
