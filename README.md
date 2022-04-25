# OpenClassrooms - Project 14
**Project Name: HRnet**  
**Project Title: "Convert an App using JQuery into React"**  

HRnet is an app which allow you to manage your employees, featuring a form to create new employees and an interactive table to display and sort them.

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)  
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=bugs)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=RmiMekaa_RemiRoeland_14_22-02-2022&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=RmiMekaa_RemiRoeland_14_22-02-2022)

## Project objectives
 - Convert an app into React
 - Convert one of four jquery plugins into a react component
 - Improve the app performances
 - Create, deploy and install an npm package

The main purpose of this project was to convert this [app](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) which use Jquery plugins into a full React application. 

Plugins used in the original app:
- [datetimepicker](https://github.com/xdan/datetimepicker) - A date picker used in the create employee form
- [selectmenu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js) - A select menu used in the form to select department and state
- [jquery-modal](https://github.com/kylefox/jquery-modal) - A Modal, displayed when the user submit the employee creation
- [DataTables](https://github.com/kylefox/jquery-modal) - Generate the interactive table in the current employees page

## My approach

- Create my own component [interactive-react-table](#interactive-react-table) to replace [DataTables](https://github.com/kylefox/jquery-modal).
- Replace the [jquery-modal](https://github.com/kylefox/jquery-modal) plugin by [react-modal](https://github.com/reactjs/react-modal)
- Replace the unnecessary plugins [datetimepicker](https://github.com/xdan/datetimepicker) and [selectmenu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js) by basic HTML elements `<select>` and `<input type="date">`. It helps me to avoid increasing the application burden and improve the app performances
- Use component-oriented programming to improve maintenance
- Create a navigation header to improve ergonomy
- Add style to the application
- Add responsive design

## Performances 

|   | JQuery App | React App |
| ------------- | ------------- | ------------- |
| Score  | 100 | 100 |
| First Contentful Paint  | 0.6 s | 0.2 s  |
| Time to Interactive  | 0.6 s  | 0.2 s  |
| Speed Index  | 0.6 s  | 0.2 s  |
| Largest Contentful Paint  | 0.6 s  | 0.6 s  |
| Total Blocking Time  | 0 ms  | 0 ms  |

## interactive-react-table

This app is using "interative-react-table", a npm package that I created in parallel to that project which handle the creation of the table.    
Find out more: [Github](https://github.com/RmiMekaa/React-Table) | [npm](https://www.npmjs.com/package/interactive-react-table)  

## Populate data base

This app is delivered without data by default.  
To test it you can either create some new employees using the form in the main page or quickly populate the data base by using the following script in your console, it will fetch mock data employees from Mockaroo API and store it in your local storage.  Please note that you can choose the amount of data you will get by setting another value to the "count" parameter in the URL.

```
async function getMockData(){
const response= await fetch("https://api.mockaroo.com/api/44d0a490?count=100&key=850b6540");
localStorage.setItem("employees", await response.text());
}
getMockData();
```

Hope it helps !

<p float="left">
  <img alt="React" title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="32px"/>
</p>