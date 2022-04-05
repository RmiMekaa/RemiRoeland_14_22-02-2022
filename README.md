# OpenClassrooms - Project 14
**Project Name: HRnet**  
**Project Title: "Convert an App using JQuery into React"**    

## Populate data base

This app is delivered without data by default.
To test the app you can populate the data base by using the following script in your console, it will fetch mock data employees from Mockaroo API and store it in your local storage. Please note that you can choose the amount of data you will get by setting another value to "count" in the URL.

```
async function getMockData(){
const response= await fetch("https://api.mockaroo.com/api/44d0a490?count=100&key=850b6540");
localStorage.setItem("employees-Mock", await response.text());
}
getMockData();
```

<br/><br/>

<p float="left">
  <img alt="Git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="32px"/>
  <img alt="HTML5" title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="32px"/>
  <img alt="CSS3" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="32px"/>
  <img alt="Sass" title="Sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="32px"/>
  <img alt="React" title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="32px"/>
</p>
