/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, 
    type = "text",
     className = "",
      ...props 
    },ref) 
    {
  const id = useId();
  return (
    <div className="w-full">
      {label && 
        <label className="inline-block text-sm font-bold mb-2" 
        htmlFor={id}>
        {label}
        </label>
      }
      <input 
      type={type}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full
      ${className}`}
      ref={ref}  //will give reference inside the parent component--
      {...props}
      id={id} 
      />
      
    </div>
  );
});

export default Input;
