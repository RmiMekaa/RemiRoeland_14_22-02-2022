import React from "react";
import PropTypes from 'prop-types';

/**
 * React component for form fields with label + input
 * @param {Object} props 
 * @param {String} props.label Label to display
 * @param {String} props.id Element id
 * @param {String} props.type Type of input
 * @param {String} props.value Input value
 * @param {Function} props.handleChange Handle change fonction
 * @param {Boolean} props.error Display message if the input is empty or invalid     
 * @param {Array.<Object>} [props.options] Array of options for dropdowns, each object must contain a "name" property
 * @returns {React.ReactElement} 
 */
export default function FormField({ label, id, type, value, handleChange, error, options }) {
  return (
    <label className="formField" htmlFor={id}>
      {label}
      {error && value === '' ? <span className="errorMsg"> is required</span> : null}
      {type === 'select' ? SelectInput(id, value, handleChange, options) : FieldInput(type, id, value, handleChange)}
    </label>
  )
}

/**
 * Generate a select input element
 * @param {String} id Element id
 * @param {String} value Input value
 * @param {Function} handleChange Handle change fonction
 * @param {Array.<Object>} options Array of options for dropdowns, each object must contain a "name" property
 * @component 
 */
const SelectInput = (id, value, handleChange, options) => {
  return (
    <select className="customInput" name={id} id={id} value={value} onChange={(e) => handleChange(e)}>
      <option style={{ display: "none" }} >Select {id}...</option>
      {options.map(option => {
        return <option key={id + option.name}>{option.name}</option>
      })}
    </select>
  )
}

/**
 * Generate a field input element
 * @param {String} type Type of input
 * @param {String} id Element id
 * @param {String} value Input value
 * @param {Function} handleChange Handle change fonction
 * @component 
 */
const FieldInput = (type, id, value, handleChange) => {
  return <input className="customInput" type={type} id={id} value={value} onChange={(e) => handleChange(e)} />;
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  options: PropTypes.array,
}