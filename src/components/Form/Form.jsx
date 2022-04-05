import React, { useState } from "react";
import PropTypes from 'prop-types';
import FormField from "../FormField/FormField";
import { STATES } from "../../data/selectOptions";
import { DEPARTMENTS } from "../../data/selectOptions";
import { addEmployee } from "../../data/dataManager";

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
 * @param {Object} props
 * @param {function} [props.toggleDisplayModal] Function to toggle modal display (triggered on submit)
 * @component
 */
export default function Form({ toggleDisplayModal }) {
  const [newEmployee, setNewEmployee] = useState(initialState);
  const [error, setError] = useState(false);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField
        label="First Name"
        id="firstName"
        type="text"
        value={newEmployee.firstName}
        handleChange={handleChange}
        error={error}
      />
      <FormField
        label="Last Name"
        id="lastName"
        type="text"
        value={newEmployee.lastName}
        handleChange={handleChange}
        error={error}
      />
      <FormField
        label="Date of Birth"
        id="birthdate"
        type="date"
        value={newEmployee.birthdate}
        handleChange={handleChange}
        error={error}
      />
      <FormField
        label="Start Date"
        id="startDate"
        type="date"
        value={newEmployee.startDate}
        handleChange={handleChange}
        error={error}
      />
      <fieldset className="address">
        <legend>Address</legend>
        <FormField
          label="Street"
          id="street"
          type="text"
          value={newEmployee.street}
          handleChange={handleChange}
          error={error}
        />
        <FormField
          label="City"
          id="city"
          type="text"
          value={newEmployee.city}
          handleChange={handleChange}
          error={error}
        />
        <FormField
          label="State"
          id="state"
          type="select"
          options={STATES}
          value={newEmployee.state}
          handleChange={handleChange}
          error={error}
        />
        <FormField
          label="Zip Code"
          id="zipCode"
          type="number"
          value={newEmployee.zipCode}
          handleChange={handleChange}
          error={error}
        />
      </fieldset>
      <FormField
        label="Department"
        id="department"
        type="select"
        options={DEPARTMENTS}
        value={newEmployee.department}
        handleChange={handleChange}
        error={error}
      />
      <div className="form__submit">
        {error ? <span className="form__submit__errorMsg">Veuillez remplir l'intégralité des champs</span> : null}
        <input className="customButton form__submit__button" type="submit" value="Create" />
      </div>
    </form>
  )

  /**
   * Update the corresponding state value on change
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
    const fullyCompleted = Object.values(newEmployee).every((v) => v !== ''); //Checks if all the fields are completed
    if (!fullyCompleted) setError(true);
    else {
      addEmployee(newEmployee);  //add employee to the database
      toggleDisplayModal && toggleDisplayModal(true); //show modal
      setNewEmployee(initialState); //reset inputs
    }
    e.preventDefault();
  }
}

Form.propTypes = {
  toggleDisplayModal: PropTypes.func,
}