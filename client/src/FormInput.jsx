import React from "react";

export default function FormInput({
  placeholder,
  name,
  type,
  handleChange,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step={`0.0001`}
      OnChange={(e) => {handleChange(e,name)}}
      className={`my-2 w-full rounded-sm p-2 outline-none bg-tranparent  text-white border-none text-sm white-glassmorphism`}
    />
  );
}
