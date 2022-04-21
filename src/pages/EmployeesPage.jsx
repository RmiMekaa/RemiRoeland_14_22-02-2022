import React from "react";
import { EMPLOYEES } from "../data/dataManager";
import { default as ReactTable } from "interactive-react-table";

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
      <ReactTable
        data={EMPLOYEES}
        headers={HEADERS}
        pageSizeOptions={[10, 25, 50, 75]}
        defaultSorting={{ property: "firstName", order: "ascending" }}
      />
    </main>
  )
}