const states = [
   "Alabama",
   "Alaska",
   "American Samoa",
   "Arizona",
   "Arkansas",
   "Armed Forces - Americas",
   "Armed Forces – Europe",
   "Armed Forces – Pacific",
   "California",
   "Colorado",
   "Connecticut",
   "Delaware",
   "District Of Columbia",
   "Florida",
   "Federated States of Micronesia",
   "Georgia",
   "Guam",
   "Hawaii",
   "Idaho",
   "Illinois",
   "Indiana",
   "Iowa",
   "Kansas",
   "Kentucky",
   "Louisiana",
   "Maine",
   "Maryland",
   "Massachusetts",
   "Marshall Islands",
   "Michigan",
   "Minnesota",
   "Mississippi",
   "Missouri",
   "Northern Mariana Islands",
   "Montana",
   "Nebraska",
   "Nevada",
   "New Hampshire",
   "New Jersey",
   "New Mexico",
   "New York",
   "North Carolina",
   "North Dakota",
   "Ohio",
   "Oklahoma",
   "Oregon",
   "Pennsylvania",
   "Puerto Rico",
   "Palau",
   "Rhode Island",
   "South Carolina",
   "South Dakota",
   "Tennessee",
   "Texas",
   "Utah",
   "Vermont",
   "Virgin Islands",
   "Virginia",
   "Washington",
   "West Virginia",
   "Wisconsin",
   "Wyoming"
];

const employmentStatus = [
   "Employed",
   "Active Military",
   "Homemaker",
   "Retired",
   "Self Employed",
   "Unemployed",
];

const idType = [
   "DRIVERS LICENSE",
   "EMPLOYER ID",
   "EXISTING MEMBER",
   "LAW ENFORCEMENT BADGE",
   "MILITARY ID",
   "NON-RESIDENT VISA",
   "OTHER",
   "PASSPORT",
   "PERMANENT RESIDENT CARD",
   "STATE ID",
   "STUDENT ID",
];

const preferredLocations = [
   "Henderson-Green Valley",
   "Las Vegas- Blue Diamond Branch",
   "Las Vegas- Durango Branch",
   "Las Vegas- Ft. Apache Branch",
   "Las Vegas- Pearl Branch",
   "Las Vegas- Rainbow Branch",
   "Las Vegas- Serene Branch",
   "Las Vegas- Summerlin Branch",
   "Las Vegas- Sunrise Branch",
   "Nellis AFB- Nellis Branch",
   "North Las Vegas- Craig Branch",
   "Reno- Damonte Pkwy Branch",
   "Other- ESign Documents",
   "Other- Out of State",
   "N Decatur 215 Branch",
   "Lemmon Valley/Reno Bran",
];

const payGrade = [
   "E1",
   "E2",
   "E3",
   "E4",
   "E5",
   "E6",
   "E7",
   "E8",
   "E9",
   "O1",
   "O1E",
   "O2",
   "O2E",
   "O3",
   "O3E",
   "O4",
   "O5",
   "O6",
   "O7",
   "O8",
   "O9",
   "O10",
   "W1",
   "W2",
   "W3"
];


const branchLocation = [
   "Blue Diamond Decatur Branch",
   "Craig Ferrell Branch",
   "Damonte/Reno Branch",
   "Durango 95 Branch",
   "E-Branch and Loan by Phone",
   "Fort Apache West Flamingo Branch",
   "Green Valley Branch",
   "Lemmon Valley/Reno Branch",
   "N Decatur 215 Branch",
   "Nellis AFB Branch",
   "Pearl Branch",
   "Plumb/Reno Branch",
   "Rainbow Branch",
   "Serene Branch",
   "Summerlin Branch",
   "Sunrise Branch "
];

const carMake = [
   "ALFA ROMEO",
   "AM GENERAL",
   "AMERICAN MOTORS (AMC)",
   "ASTON MARTIN",
   "AUDI",
   "AUSTIN HEALEY",
   "AVANTI",
   "BENTLEY",
   "BERTONE",
   "BMW",
   "BUICK",
   "CADILLAC",
   "CHEVROLET",
   "CHRYSLER",
   "CONSULIER",
   "DAEWOO",
   "DAIHATSU",
   "DAIMLER",
   "DATSUN/NISSAN",
   "DELOREAN",
   "DODGE",
   "EAGLE",
   "FERRARI",
   "FIAT",
   "FORD",
   "GEO",
   "GMC",
   "HONDA",
   "HUMMER",
   "HYUNDAI",
   "INFINITI",
   "ISUZU",
   "JAGUAR",
   "JEEP",
   "KIA",
   "LAMBORGHINI",
   "LAND ROVER",
   "LEXUS",
   "LINCOLN",
   "LOTUS",
   "MASERATI",
   "MAZDA",
   "MERCEDES-BENZ",
   "MERCURY",
   "MERKUR",
   "MG CLASSIC",
   "MINI",
   "MITSUBISHI",
   "NISSAN",
   "OLDSMOBILE",
   "PEUGEOT",
   "PININFARINA",
   "PLYMOUTH",
   "PONTIAC",
   "PORSCHE",
   "RENAULT",
   "ROLLS-ROYCE",
   "SAAB",
   "SATURN",
   "SCION",
   "SMART",
   "STERLING",
   "SUBARU",
   "SUZUKI",
   "TESLA",
   "TOYOTA",
   "TRIUMPH",
   "VOLKSWAGEN",
   "VOLVO",
   "YUGO",
   "RV",
   "ZENN"
];

const loanTerm = [
   "24",
   "36",
   "48",
   "60",
   "72"
];
function createNumbers(num: number) {
   const numbers  = [];
   for(let i = 0; i <= num; i++) {
      numbers.push(i);
   }
   return numbers;
} 

export { 
   branchLocation,
   carMake,
   createNumbers, 
   employmentStatus, 
   idType, 
   loanTerm,
   payGrade, 
   preferredLocations, 
   states 
};
