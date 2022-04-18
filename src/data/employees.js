const localStorageData = JSON.parse(localStorage.getItem("employees"))
export const EMPLOYEES = localStorageData ? localStorageData : [];