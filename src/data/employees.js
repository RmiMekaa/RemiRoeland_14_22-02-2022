const localStorageData = JSON.parse(localStorage.getItem("employees"))
export const EMPLOYEES = localStorageData ? localStorageData : [];

//Data used in the V1
// export const EMPLOYEES = localStorageData ? localStorageData :
//   [
//     {
//       "firstName": "Aurie",
//       "lastName": "Wardhough",
//       "startDate": "1965-01-16",
//       "department": "Sales",
//       "birthdate": "1988-07-21",
//       "street": "4th",
//       "city": "San Francisco",
//       "state": "California",
//       "zipCode": 90943
//     },
//     {
//       "firstName": "Alfred",
//       "lastName": "Mealiffe",
//       "startDate": "2003-03-26",
//       "department": "Legal",
//       "birthdate": "1967-09-16",
//       "street": "Vernon",
//       "city": "Augusta",
//       "state": "Georgia",
//       "zipCode": 30644
//     },
//     {
//       "firstName": "Brodie",
//       "lastName": "Brizland",
//       "startDate": "2008-04-30",
//       "department": "Sales",
//       "birthdate": "1987-01-27",
//       "street": "Welch",
//       "city": "Phoenix",
//       "state": "Arizona",
//       "zipCode": 85642
//     },
//     {
//       "firstName": "Stacey",
//       "lastName": "Mays",
//       "startDate": "1947-10-30",
//       "department": "Human Resources",
//       "birthdate": "2007-07-15",
//       "street": "Texas",
//       "city": "Cincinnati",
//       "state": "Ohio",
//       "zipCode": 45093
//     },
//     {
//       "firstName": "Nickolai",
//       "lastName": "Skyrm",
//       "startDate": "1927-07-29",
//       "department": "Sales",
//       "birthdate": "1957-11-03",
//       "street": "Summer Ridge",
//       "city": "San Diego",
//       "state": "California",
//       "zipCode": 90637
//     },
//     {
//       "firstName": "Ruttger",
//       "lastName": "Jewiss",
//       "startDate": "1929-05-07",
//       "department": "Legal",
//       "birthdate": "2000-11-05",
//       "street": "Upham",
//       "city": "New York City",
//       "state": "New York",
//       "zipCode": 10015
//     },
//     {
//       "firstName": "Hayward",
//       "lastName": "Rathmell",
//       "startDate": "1993-01-02",
//       "department": "Human Resources",
//       "birthdate": "1938-02-08",
//       "street": "Beilfuss",
//       "city": "Dayton",
//       "state": "Ohio",
//       "zipCode": 45884
//     },
//     {
//       "firstName": "Eddie",
//       "lastName": "Nucci",
//       "startDate": "1981-02-11",
//       "department": "Engineering",
//       "birthdate": "2009-09-18",
//       "street": "New Castle",
//       "city": "Los Angeles",
//       "state": "California",
//       "zipCode": 90850
//     },
//     {
//       "firstName": "Daphne",
//       "lastName": "Hartgill",
//       "startDate": "2015-06-05",
//       "department": "Engineering",
//       "birthdate": "1959-09-17",
//       "street": "Corscot",
//       "city": "Kansas City",
//       "state": "Missouri",
//       "zipCode": 68198
//     },
//     {
//       "firstName": "Batholomew",
//       "lastName": "Sabater",
//       "startDate": "2001-05-09",
//       "department": "Sales",
//       "birthdate": "1991-01-31",
//       "street": "Evergreen",
//       "city": "Trenton",
//       "state": "New Jersey",
//       "zipCode": 15500
//     },
//     {
//       "firstName": "Kalinda",
//       "lastName": "Eliassen",
//       "startDate": "1989-07-04",
//       "department": "Human Resources",
//       "birthdate": "1988-06-17",
//       "street": "Acker",
//       "city": "Milwaukee",
//       "state": "Wisconsin",
//       "zipCode": 71761
//     },
//     {
//       "firstName": "Valaria",
//       "lastName": "Roddell",
//       "startDate": "1997-05-10",
//       "department": "Engineering",
//       "birthdate": "1974-12-06",
//       "street": "Raven",
//       "city": "Augusta",
//       "state": "Georgia",
//       "zipCode": 30163
//     },
//     {
//       "firstName": "Alysa",
//       "lastName": "Averay",
//       "startDate": "1982-06-14",
//       "department": "Marketing",
//       "birthdate": "1933-12-09",
//       "street": "Texas",
//       "city": "Baton Rouge",
//       "state": "Louisiana",
//       "zipCode": 70974
//     },
//     {
//       "firstName": "Chelsy",
//       "lastName": "Roome",
//       "startDate": "1995-10-16",
//       "department": "Marketing",
//       "birthdate": "1995-10-23",
//       "street": "Myrtle",
//       "city": "Memphis",
//       "state": "Tennessee",
//       "zipCode": 17775
//     },
//     {
//       "firstName": "Donnajean",
//       "lastName": "Hanway",
//       "startDate": "2017-03-29",
//       "department": "Legal",
//       "birthdate": "1960-06-30",
//       "street": "Lake View",
//       "city": "Norfolk",
//       "state": "Virginia",
//       "zipCode": 22733
//     },
//     {
//       "firstName": "Merwin",
//       "lastName": "Blayd",
//       "startDate": "1923-05-08",
//       "department": "Marketing",
//       "birthdate": "1966-06-02",
//       "street": "Granby",
//       "city": "Schenectady",
//       "state": "New York",
//       "zipCode": 10763
//     },
//     {
//       "firstName": "Joan",
//       "lastName": "Harrod",
//       "startDate": "1989-11-11",
//       "department": "Engineering",
//       "birthdate": "1979-07-06",
//       "street": "Lien",
//       "city": "Pensacola",
//       "state": "Florida",
//       "zipCode": 11749
//     },
//     {
//       "firstName": "Ashley",
//       "lastName": "Brundrett",
//       "startDate": "1984-02-06",
//       "department": "Legal",
//       "birthdate": "1997-04-27",
//       "street": "Alpine",
//       "city": "New York City",
//       "state": "New York",
//       "zipCode": 10015
//     },
//     {
//       "firstName": "Pennie",
//       "lastName": "Gebuhr",
//       "startDate": "1932-10-11",
//       "department": "Human Resources",
//       "birthdate": "2020-07-26",
//       "street": "Bobwhite",
//       "city": "Hartford",
//       "state": "Connecticut",
//       "zipCode": 14837
//     },
//     {
//       "firstName": "Reiko",
//       "lastName": "Stuck",
//       "startDate": "1994-04-20",
//       "department": "Marketing",
//       "birthdate": "2013-08-07",
//       "street": "Truax",
//       "city": "Alexandria",
//       "state": "Virginia",
//       "zipCode": 22191
//     }
//   ]