import React from "react";

/**
 * React component for select button
 * @param {Object} props 
 * @param {String} props.label  Label to display
 * @param {String} props.id     Element id
 * @param {Object} props.data   Array containing the options
 * @param {String} props.value   Input value
 * @param {Function} props.handleChange  SetValue fonction
 * @component 
 */
export default function CustomSelect(props) {
  const { label, id, data, value, handleChange } = props;
  return (
    <label className="customSelect" htmlFor={id}>
      {label}
      <select name={id} id={id} value={value} onChange={(e) => handleChange(e)}>
        <option style={{ display: "none" }} >Select {id}...</option>
        {data.map(data => {
          return <option key={id + data.name}>{data.name}</option>
        })}
      </select>
    </label>
  )
}