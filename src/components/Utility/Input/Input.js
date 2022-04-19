import React, { Fragment } from "react";
import "./Input.css";

const Input = (props) => {
  const { type, label, placeholder, onChange, className } = props;
  const inputClass = "input";
  return (
    <Fragment>
      <div className="container">
        <label className="label">{label}</label>
        <input
          className={`${inputClass} + ${className}`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
};

export default Input;
