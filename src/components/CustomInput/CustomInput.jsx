import React from "react";

/**
 * React component for input items (label + input)
 * @param {Object} props 
 * @param {String} props.label  Label to display
 * @param {String} props.id     Element id
 * @param {String} props.type   Type of input
 * @param {String} props.value   Input value
 * @param {Function} props.handleChange  SetValue fonction
 * @component 
 */
export default function CustomInput(props) {
  const { label, id, type, value, handleChange } = props;
  return (
    <label className="customInput" htmlFor={id}>
      {label}
      <input type={type} id={id} value={value} onChange={(e) => handleChange(e)} />
    </label>
  )
}