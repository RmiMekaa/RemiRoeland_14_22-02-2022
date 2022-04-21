const localStorageData = JSON.parse(localStorage.getItem("employees"))
export const EMPLOYEES = localStorageData ? localStorageData : [];

/**
 * Add the employee to the database and save it in the local Storage
 * @param   {Object}  employee  New employee to add
 * @return  {void}
 */
export function addEmployee(employee) {
  EMPLOYEES.push(employee);
  localStorage.setItem('employees', JSON.stringify(EMPLOYEES))
}