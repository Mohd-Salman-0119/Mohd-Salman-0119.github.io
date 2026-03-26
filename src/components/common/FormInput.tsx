import React from "react";
import { FaUser } from "react-icons/fa";
import { FormInputProps } from "../../types";

const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  rows,
}) => {
  const Element = rows ? "textarea" : "input";
  return (
    <div className="py-2 px-3 flex gap-2 items-center rounded-md border-blue-900 border w-[100%]">
      <FaUser />
      {rows ? (
        <textarea
          placeholder={placeholder}
          name={name}
          className="bg-transparent outline-none w-full"
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="bg-transparent outline-none w-full"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default FormInput;
