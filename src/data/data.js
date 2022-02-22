const localStorageData = JSON.parse(localStorage.getItem("employees"))

export const EMPLOYEES = localStorageData ? localStorageData :
  [
    {
      firstName: "Aurie",
      lastName: "Wardhough",
      birthdate: "1988-07-21",
      startDate: "1965-01-16",
      department: "Sales",
      street: "4th",
      city: "San Francisco",
      state: "California",
      zipCode: 90943
    },
    {
      firstName: "Alfred",
      lastName: "Mealiffe",
      birthdate: "1967-09-16",
      startDate: "2003-03-26",
      department: "Legal",
      street: "Vernon",
      city: "Augusta",
      state: "Georgia",
      zipCode: 30644
    },
    {
      firstName: "Brodie",
      lastName: "Brizland",
      birthdate: "1987-01-27",
      startDate: "2008-04-30",
      department: "Sales",
      street: "Welch",
      city: "Phoenix",
      state: "Arizona",
      zipCode: 85642
    },
    {
      firstName: "Stacey",
      lastName: "Mays",
      birthdate: "2007-07-15",
      startDate: "1947-10-30",
      department: "Human Resources",
      street: "Texas",
      city: "Cincinnati",
      state: "Ohio",
      zipCode: 45093
    },
    {
      firstName: "Nickolai",
      lastName: "Skyrm",
      birthdate: "1957-11-03",
      startDate: "1927-07-29",
      department: "Sales",
      street: "Summer Ridge",
      city: "San Diego",
      state: "California",
      zipCode: 90637
    },
    {
      firstName: "Ruttger",
      lastName: "Jewiss",
      birthdate: "2000-11-05",
      startDate: "1929-05-07",
      department: "Legal",
      street: "Upham",
      city: "New York City",
      state: "New York",
      zipCode: 10015
    },
    {
      firstName: "Hayward",
      lastName: "Rathmell",
      birthdate: "1938-02-08",
      startDate: "1993-01-02",
      department: "Human Resources",
      street: "Beilfuss",
      city: "Dayton",
      state: "Ohio",
      zipCode: 45884
    },
    {
      firstName: "Eddie",
      lastName: "Nucci",
      birthdate: "2009-09-18",
      startDate: "1981-02-11",
      department: "Engineering",
      street: "New Castle",
      city: "Los Angeles",
      state: "California",
      zipCode: 90850
    },
    {
      firstName: "Daphne",
      lastName: "Hartgill",
      birthdate: "1959-09-17",
      startDate: "2015-06-05",
      department: "Engineering",
      street: "Corscot",
      city: "Kansas City",
      state: "Missouri",
      zipCode: 68198
    },
    {
      firstName: "Batholomew",
      lastName: "Sabater",
      birthdate: "1991-01-31",
      startDate: "2001-05-09",
      department: "Sales",
      street: "Evergreen",
      city: "Trenton",
      state: "New Jersey",
      zipCode: 15500
    },
    {
      firstName: "Kalinda",
      lastName: "Eliassen",
      birthdate: "1988-06-17",
      startDate: "1989-07-04",
      department: "Human Resources",
      street: "Acker",
      city: "Milwaukee",
      state: "Wisconsin",
      zipCode: 71761
    },
    {
      firstName: "Valaria",
      lastName: "Roddell",
      birthdate: "1974-12-06",
      startDate: "1997-05-10",
      department: "Engineering",
      street: "Raven",
      city: "Augusta",
      state: "Georgia",
      zipCode: 30163
    },
    {
      firstName: "Alysa",
      lastName: "Averay",
      birthdate: "1933-12-09",
      startDate: "1982-06-14",
      department: "Marketing",
      street: "Texas",
      city: "Baton Rouge",
      state: "Louisiana",
      zipCode: 70974
    },
    {
      firstName: "Chelsy",
      lastName: "Roome",
      birthdate: "1995-10-23",
      startDate: "1995-10-16",
      department: "Marketing",
      street: "Myrtle",
      city: "Memphis",
      state: "Tennessee",
      zipCode: 17775
    },
    {
      firstName: "Donnajean",
      lastName: "Hanway",
      birthdate: "1960-06-30",
      startDate: "2017-03-29",
      department: "Legal",
      street: "Lake View",
      city: "Norfolk",
      state: "Virginia",
      zipCode: 22733
    },
    {
      firstName: "Merwin",
      lastName: "Blayd",
      birthdate: "1966-06-02",
      startDate: "1923-05-08",
      department: "Marketing",
      street: "Granby",
      city: "Schenectady",
      state: "New York",
      zipCode: 10763
    },
    {
      firstName: "Joan",
      lastName: "Harrod",
      birthdate: "1979-07-06",
      startDate: "1989-11-11",
      department: "Engineering",
      street: "Lien",
      city: "Pensacola",
      state: "Florida",
      zipCode: 11749
    },
    {
      firstName: "Ashley",
      lastName: "Brundrett",
      birthdate: "1997-04-27",
      startDate: "1984-02-06",
      department: "Legal",
      street: "Alpine",
      city: "New York City",
      state: "New York",
      zipCode: 10015
    },
    {
      firstName: "Pennie",
      lastName: "Gebuhr",
      birthdate: "2020-07-26",
      startDate: "1932-10-11",
      department: "Human Resources",
      street: "Bobwhite",
      city: "Hartford",
      state: "Connecticut",
      zipCode: 14837
    },
    {
      firstName: "Reiko",
      lastName: "Stuck",
      birthdate: "2013-08-07",
      startDate: "1994-04-20",
      department: "Marketing",
      street: "Truax",
      city: "Alexandria",
      state: "Virginia",
      zipCode: 22191
    }
  ]
export const STATES = [
  {
    "name": "Alabama",
    "abbreviation": "AL"
  },
  {
    "name": "Alaska",
    "abbreviation": "AK"
  },
  {
    "name": "American Samoa",
    "abbreviation": "AS"
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ"
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR"
  },
  {
    "name": "California",
    "abbreviation": "CA"
  },
  {
    "name": "Colorado",
    "abbreviation": "CO"
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT"
  },
  {
    "name": "Delaware",
    "abbreviation": "DE"
  },
  {
    "name": "District Of Columbia",
    "abbreviation": "DC"
  },
  {
    "name": "Federated States Of Micronesia",
    "abbreviation": "FM"
  },
  {
    "name": "Florida",
    "abbreviation": "FL"
  },
  {
    "name": "Georgia",
    "abbreviation": "GA"
  },
  {
    "name": "Guam",
    "abbreviation": "GU"
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI"
  },
  {
    "name": "Idaho",
    "abbreviation": "ID"
  },
  {
    "name": "Illinois",
    "abbreviation": "IL"
  },
  {
    "name": "Indiana",
    "abbreviation": "IN"
  },
  {
    "name": "Iowa",
    "abbreviation": "IA"
  },
  {
    "name": "Kansas",
    "abbreviation": "KS"
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY"
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA"
  },
  {
    "name": "Maine",
    "abbreviation": "ME"
  },
  {
    "name": "Marshall Islands",
    "abbreviation": "MH"
  },
  {
    "name": "Maryland",
    "abbreviation": "MD"
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA"
  },
  {
    "name": "Michigan",
    "abbreviation": "MI"
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN"
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS"
  },
  {
    "name": "Missouri",
    "abbreviation": "MO"
  },
  {
    "name": "Montana",
    "abbreviation": "MT"
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE"
  },
  {
    "name": "Nevada",
    "abbreviation": "NV"
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH"
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ"
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM"
  },
  {
    "name": "New York",
    "abbreviation": "NY"
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC"
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND"
  },
  {
    "name": "Northern Mariana Islands",
    "abbreviation": "MP"
  },
  {
    "name": "Ohio",
    "abbreviation": "OH"
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK"
  },
  {
    "name": "Oregon",
    "abbreviation": "OR"
  },
  {
    "name": "Palau",
    "abbreviation": "PW"
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  },
  {
    "name": "Puerto Rico",
    "abbreviation": "PR"
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI"
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC"
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD"
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN"
  },
  {
    "name": "Texas",
    "abbreviation": "TX"
  },
  {
    "name": "Utah",
    "abbreviation": "UT"
  },
  {
    "name": "Vermont",
    "abbreviation": "VT"
  },
  {
    "name": "Virgin Islands",
    "abbreviation": "VI"
  },
  {
    "name": "Virginia",
    "abbreviation": "VA"
  },
  {
    "name": "Washington",
    "abbreviation": "WA"
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV"
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI"
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY"
  }
]
export const DEPARTMENTS = [
  {
    "name": "Sales",
  },
  {
    "name": "Marketing",
  },
  {
    "name": "Engineering",
  },
  {
    "name": "Human Resources",
  },
  {
    "name": "Legal",
  }
]
