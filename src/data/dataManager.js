import { EMPLOYEES } from "./employees";

/**
 * Add the employee to the database and save it in the local Storage
 * @param   {Object}  employee  New employee to add
 * @return  {void}
 */
export function addEmployee(employee) {
  EMPLOYEES.push(employee);
  localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
}