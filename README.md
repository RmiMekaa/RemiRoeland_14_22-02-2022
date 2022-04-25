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

## interactive-react-table

This app is using "interative-react-table", a npm package that I created in parallel to that project which handle the creation of the table.    
Lien [Github](https://github.com/RmiMekaa/React-Table)  
Lien [npm](https://www.npmjs.com/package/interactive-react-table)  

<br/><br/>

<p float="left">
  <img alt="Git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="32px"/>
  <img alt="HTML5" title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="32px"/>
  <img alt="CSS3" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="32px"/>
  <img alt="Sass" title="Sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="32px"/>
  <img alt="React" title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="32px"/>
</p>
