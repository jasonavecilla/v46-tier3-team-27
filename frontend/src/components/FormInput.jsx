import React from "react";

const FormInput = ({ label, name, type, value, size, handleChange }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="capitalize label-text"> {label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={`input input-bordered ${size}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
