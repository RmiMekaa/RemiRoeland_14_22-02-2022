import React from "react";
import Banner from "../components/Banner/Banner";
import Table from "../components/Table/Table";
import { employees, headers } from '../mock/employees'


/**
 * React component for the employees page
 * @component
 */
export default function EmployeesPage() {

  return (
    <main className="employeesPage">
      <Banner text="Current employees" />
      <Table headers={headers} data={employees} />
    </main>
  )
}