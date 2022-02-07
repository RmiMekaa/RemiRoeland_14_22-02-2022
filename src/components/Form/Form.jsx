import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";
import { states, departments } from "../../data/data";

const initialState = {
  firstName: '',
  lastName: '',
  birthdate: '',
  startDate: '',
  department: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
}

/**
 * React component for new employee form
 * @component
 */
export default function Form() {
  const [newEmployee, setNewEmployee] = useState(initialState);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return <p className="successMsg">Employee created !<span className="successMsg__closeBtn" onClick={() => setSuccess(false)}>x</span></p>
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <CustomInput label="First Name" id="firstName" type="text" value={newEmployee.firstName} handleChange={handleChange} />
      <CustomInput label="Last Name" id="lastName" type="text" value={newEmployee.lastName} handleChange={handleChange} />
      <CustomInput label="Date of Birth" id="birthdate" type="date" value={newEmployee.birthdate} handleChange={handleChange} />
      <CustomInput label="Start Date" id="startDate" type="date" value={newEmployee.startDate} handleChange={handleChange} />
      <fieldset className="address">
        <legend>Address</legend>
        <CustomInput label="Street" id="street" type="text" value={newEmployee.street} handleChange={handleChange} />
        <CustomInput label="City" id="city" type="text" value={newEmployee.city} handleChange={handleChange} />
        <CustomSelect label="State" id="state" data={states} value={newEmployee.state} handleChange={handleChange} />
        <CustomInput label="Zip Code" id="zipCode" type="number" value={newEmployee.zipCode} handleChange={handleChange} />
      </fieldset>
      <CustomSelect label="Department" id="department" data={departments} value={newEmployee.department} handleChange={handleChange} />
      <div className="form__submit">
        {error ? <span className="form__submit__errorMsg">Veuillez remplir l'intégralité des champs</span> : null}
        <input className="form__submit__button" type="submit" value="Create" />
      </div>
    </form>
  )

  /**
   * Update the state with input value on change
   * @param {*} e Event
   * @return {void}
   */
  function handleChange(e) {
    const { id, value } = e.target;
    setNewEmployee((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  /**
   * Handle form submission
   * @param {*} e Event
   * @return {void}
   */
  function handleSubmit(e) {
    setError(false)
    setSuccess(false)
    const fullyCompleted = Object.values(newEmployee).every((v) => v !== '');
    if (!fullyCompleted) setError(true);
    else {
      setSuccess(true)
      console.log(newEmployee);
    }
    e.preventDefault();
  }
}