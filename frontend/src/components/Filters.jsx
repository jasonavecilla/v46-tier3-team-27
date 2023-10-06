import React, { useState } from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { FaTimes } from "react-icons/fa";
const Filters = () => {
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredients.includes(search)) {
      setIngredients([...ingredients, search]);
    }

    setSearch("");
  };
  console.log(search);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const deleteIngredient = (name) => {
    const newArr = ingredients.filter((item) => item !== name);
    setIngredients(newArr);
  };

  return (
    <form
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
      {ingredients.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-y-2">
          {ingredients.map((item, index) => (
            <article
              className="relative px-6 rounded-md bg-secondary"
              key={index}
            >
              {item}{" "}
              <FaTimes
                onClick={() => deleteIngredient(item)}
                className="absolute text-primary top-1 right-1"
              />{" "}
            </article>
          ))}
        </div>
      ) : null}
    </form>
  );
};

export default Filters;
