import React from "react";
import Table from '../components/Table/Table'
import { EMPLOYEES } from "../data/employees";

/**
 * Component for the employees page
 * @component
 */
export default function EmployeesPage() {

  const HEADERS = [
    {
      name: "First Name",
      key: "firstName"
    },
    {
      name: "Last Name",
      key: "lastName"
    },
    {
      name: "Start Date",
      key: "startDate"
    },
    {
      name: "Department",
      key: "department"
    },
    {
      name: "Date of Birth",
      key: "birthdate"
    },
    {
      name: "Street",
      key: "street"
    },
    {
      name: "City",
      key: "city"
    },
    {
      name: "State",
      key: "state"
    },
    {
      name: "Zip Code",
      key: "zipCode"
    }
  ]

  return (
    <main className="employeesPage">
      <h1>Current employees</h1>
      <Table data={EMPLOYEES} headers={HEADERS} />
    </main>
  )
}