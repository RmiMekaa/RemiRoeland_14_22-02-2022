import React from "react";
import PropTypes from 'prop-types';

FormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
  options: PropTypes.array,
}

FormField.defaultProps = {
  options: [],
};

/**
 * React component for form fields with label + input
 * @param {Object} props 
 * @param {String} props.label  Label to display
 * @param {String} props.id     Element id
 * @param {String} props.type   Type of input
 * @param {String} props.value   Input value
 * @param {Function} props.handleChange  Handle change fonction
 * @param {Boolean} props.error   
 * @param {Array} props.options  
 * @component 
 */
export default function FormField(props) {
  const { label, id, type, value, options, handleChange, error } = props;
  return (
    <label className="formField" htmlFor={id}>
      {label}
      {error && value === '' ? <span className="errorMsg"> is required</span> : null}
      {type === 'select' ? SelectInput(id, value, handleChange, options) : FieldInput(type, id, value, handleChange)}
    </label>
  )
}

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

const FieldInput = (type, id, value, handleChange) => {
  return <input className="customInput" type={type} id={id} value={value} onChange={(e) => handleChange(e)} />;
}

