import React, { useEffect } from "react";
import Table from '../components/Table/Table'

import { EMPLOYEES } from '../data/employees'
import { HEADERS } from '../data/tableHeaders'

/**
 * React component for the employees page
 * @component
 */
export default function EmployeesPage() {

  useEffect(() => {
    //Fetch employees data here when api will be available
  })

  return (
    <main className="employeesPage">
      <h1>Current employees</h1>
      <Table data={EMPLOYEES} headers={HEADERS} />
    </main>
  )
}