import React from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";
const Filters = () => {
  return (
    <Form className="grid items-center px-8 py-4 rounded-md bg-base-200 gap-x-4 gap-y-8 ">
      {/* SEARCH */}
      <FormInput
        type={"search"}
        label={"search dishes"}
        size={"input-sm"}
        defaultValue={"your meals"}
      />
    </Form>
  );
};

export default Filters;
