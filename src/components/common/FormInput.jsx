import React from "react";
import { FaUser } from "react-icons/fa";
function FormInput() {
  return (
    <div className="py-2 px-3 flex gap-2 items-center rounded-md border-blue-900 border w-[100%]">
      <FaUser />
      <input text="text" placeholder="Email" className="bg-transparent outline-none"/>
    </div>
  );
}

export default FormInput;
