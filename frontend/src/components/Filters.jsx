import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../Features/Recipes/recipeSlice";

const Filters = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setSearch("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  // Denounce search
  useEffect(() => {
    let timeId = setTimeout(() => {
      dispatch(searchRecipes(search));
    }, 1000);
    return () => clearTimeout(timeId);
  }, [search]);
  return (
    <Form
      onSubmit={handleSubmit}
      className="grid items-center px-8 py-4 rounded-md bg-base-200 gap-x-4 gap-y-8 "
    >
      {/* SEARCH */}
      <FormInput
        type={"search"}
        label={"search ingredients"}
        size={"input-sm"}
        name={"search"}
        value={search}
        handleChange={handleSearch}
      />
    </Form>
  );
};

export default Filters;
