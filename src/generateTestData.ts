import * as fs from "fs";
import * as path from "path";

// Constants
const NUM_RECORDS = 10000;
const OUTPUT_FILE = "testData.json";

// Types
type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  birthDate: string;
  address: Address;
  phoneNumber: string;
  occupation: string;
  income: number;
  creditScore: number;
  hasChildren: boolean;
  education: string;
  maritalStatus: string;
  interests: string[];
  socialMedia: SocialMedia;
  purchaseHistory: Purchase[];
};

type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

type SocialMedia = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

type Purchase = {
  id: string;
  date: string;
  amount: number;
  category: string;
  item: string;
};

// Data sets
const firstNames: string[] = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Margaret",
  "Joseph",
  "Susan",
  "Thomas",
  "Dorothy",
  "Charles",
  "Lisa",
  "Christopher",
  "Nancy",
  "Daniel",
  "Karen",
  "Paul",
  "Betty",
  "Mark",
  "Helen",
  "Donald",
  "Sandra",
  "George",
  "Donna",
  "Kenneth",
  "Carol",
  "Steven",
  "Ruth",
  "Edward",
  "Sharon",
  "Brian",
  "Michelle",
  "Ronald",
  "Laura",
  "Anthony",
  "Sarah",
  "Kevin",
  "Kimberly",
  "Jason",
  "Deborah",
  "Matthew",
  "Jessica",
];

const lastNames: string[] = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
];

const streetNames: string[] = [
  "Main",
  "Park",
  "Oak",
  "Pine",
  "Maple",
  "Cedar",
  "Elm",
  "View",
  "Washington",
  "Lake",
  "Hill",
  "Forest",
  "River",
  "Spring",
  "Valley",
  "Ridge",
  "Church",
  "Meadow",
  "North",
  "South",
  "East",
  "West",
  "Highland",
  "Center",
  "Union",
  "School",
  "College",
  "University",
  "Market",
  "Mill",
  "Franklin",
  "Willow",
  "Jefferson",
  "Madison",
  "Adams",
  "Jackson",
  "Lincoln",
  "Monroe",
  "Cleveland",
  "Wilson",
  "Harrison",
  "Roosevelt",
  "Truman",
  "Kennedy",
  "Johnson",
  "Nixon",
  "Ford",
  "Carter",
  "Reagan",
  "Bush",
  "Clinton",
];

const cities: string[] = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "San Francisco",
  "Charlotte",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "El Paso",
  "Detroit",
  "Nashville",
  "Portland",
  "Memphis",
  "Oklahoma City",
  "Las Vegas",
  "Louisville",
  "Baltimore",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Mesa",
  "Sacramento",
  "Atlanta",
  "Kansas City",
  "Colorado Springs",
  "Miami",
  "Raleigh",
  "Omaha",
  "Long Beach",
  "Virginia Beach",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Arlington",
  "Tampa",
];

const states: string[] = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
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
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
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
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const countries: string[] = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Italy",
  "Spain",
  "Mexico",
  "Brazil",
  "Argentina",
  "India",
  "China",
  "Russia",
  "South Korea",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Austria",
  "Belgium",
  "Portugal",
  "Greece",
  "Ireland",
  "New Zealand",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Indonesia",
  "Philippines",
  "Vietnam",
  "South Africa",
  "Egypt",
  "Turkey",
  "Israel",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Romania",
  "Bulgaria",
  "Croatia",
];

const occupations: string[] = [
  "Teacher",
  "Engineer",
  "Doctor",
  "Nurse",
  "Lawyer",
  "Accountant",
  "Architect",
  "Chef",
  "Police Officer",
  "Firefighter",
  "Salesperson",
  "Manager",
  "Artist",
  "Writer",
  "Musician",
  "Actor",
  "Photographer",
  "Designer",
  "Programmer",
  "Scientist",
  "Researcher",
  "Journalist",
  "Librarian",
  "Psychologist",
  "Social Worker",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Mechanic",
  "Farmer",
  "Gardener",
  "Pilot",
  "Flight Attendant",
  "Bus Driver",
  "Taxi Driver",
  "Waiter",
  "Bartender",
  "Hairdresser",
  "Beautician",
  "Personal Trainer",
  "Real Estate Agent",
  "Insurance Agent",
  "Financial Advisor",
  "Marketing Specialist",
  "Human Resources Manager",
  "Customer Service Representative",
  "Administrative Assistant",
  "Receptionist",
  "Security Guard",
];

const educationLevels: string[] = [
  "High School Diploma",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Degree",
  "Vocational Training",
  "Some College",
  "GED",
  "No Formal Education",
];

const maritalStatuses: string[] = [
  "Single",
  "Married",
  "Divorced",
  "Widowed",
  "Separated",
  "In a Relationship",
  "Engaged",
  "Domestic Partnership",
];

const interests: string[] = [
  "Reading",
  "Writing",
  "Traveling",
  "Photography",
  "Cooking",
  "Gardening",
  "Hiking",
  "Camping",
  "Fishing",
  "Hunting",
  "Sports",
  "Music",
  "Movies",
  "TV Shows",
  "Video Games",
  "Board Games",
  "Painting",
  "Drawing",
  "Sculpting",
  "Knitting",
  "Sewing",
  "Woodworking",
  "Metalworking",
  "Yoga",
  "Meditation",
  "Dancing",
  "Singing",
  "Playing an Instrument",
  "Collecting",
  "Volunteering",
  "Astronomy",
  "Bird Watching",
  "Wine Tasting",
  "Brewing Beer",
  "Gourmet Coffee",
  "Fashion",
  "Interior Design",
  "Car Restoration",
  "Motorcycle Riding",
  "Skydiving",
  "Scuba Diving",
  "Surfing",
  "Skiing",
  "Snowboarding",
  "Rock Climbing",
  "Martial Arts",
  "Chess",
  "Poker",
  "Crossword Puzzles",
  "Sudoku",
];

const purchaseCategories: string[] = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Books",
  "Movies & Music",
  "Sports & Outdoors",
  "Toys & Games",
  "Health & Beauty",
  "Automotive",
  "Grocery",
  "Pet Supplies",
  "Office Supplies",
  "Jewelry",
  "Baby & Kids",
  "Tools & Home Improvement",
];

// Helper functions
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Data generation functions
function generatePerson(id: number): Person {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const birthDate = getRandomDate(new Date(1950, 0, 1), new Date(2003, 11, 31));

  return {
    id,
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    age: new Date().getFullYear() - birthDate.getFullYear(),
    birthDate: birthDate.toISOString().split("T")[0],
    address: generateAddress(),
    phoneNumber: generatePhoneNumber(),
    occupation: getRandomElement(occupations),
    income: getRandomInt(20000, 200000),
    creditScore: getRandomInt(300, 850),
    hasChildren: Math.random() < 0.5,
    education: getRandomElement(educationLevels),
    maritalStatus: getRandomElement(maritalStatuses),
    interests: generateInterests(),
    socialMedia: generateSocialMedia(firstName, lastName),
    purchaseHistory: generatePurchaseHistory(),
  };
}

function generateAddress(): Address {
  return {
    street: `${getRandomInt(1, 9999)} ${getRandomElement(streetNames)} St`,
    city: getRandomElement(cities),
    state: getRandomElement(states),
    zipCode: getRandomInt(10000, 99999).toString().padStart(5, "0"),
    country: getRandomElement(countries),
  };
}

function generatePhoneNumber(): string {
  return `(${getRandomInt(100, 999)}) ${getRandomInt(100, 999)}-${getRandomInt(
    1000,
    9999
  )}`;
}

function generateInterests(): string[] {
  const numInterests = getRandomInt(1, 5);
  const selectedInterests: string[] = [];
  for (let i = 0; i < numInterests; i++) {
    let interest;
    do {
      interest = getRandomElement(interests);
    } while (selectedInterests.includes(interest));
    selectedInterests.push(interest);
  }
  return selectedInterests;
}

function generateSocialMedia(firstName: string, lastName: string): SocialMedia {
  const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${getRandomInt(
    1,
    999
  )}`;
  return {
    facebook: `https://facebook.com/${username}`,
    twitter: `https://twitter.com/${username}`,
    instagram: `https://instagram.com/${username}`,
    linkedin: `https://linkedin.com/in/${username}`,
  };
}


// Additional utility functions for data analysis
function calculateAverageAge(data: Person[]): number {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  return totalAge / data.length;
}

function calculateAverageIncome(data: Person[]): number {
  const totalIncome = data.reduce((sum, person) => sum + person.income, 0);
  return totalIncome / data.length;
}

function calculatePercentageWithChildren(data: Person[]): number {
  const withChildren = data.filter((person) => person.hasChildren).length;
  return (withChildren / data.length) * 100;
}

function getMostCommonOccupation(data: Person[]): string {
  const occupationCount: Record<string, number> = {};

  data.forEach((person) => {
    if (occupationCount[person.occupation]) {
      occupationCount[person.occupation]++;
    } else {
      occupationCount[person.occupation] = 1;
    }
  });

  let mostCommonOccupation = "";
  let maxCount = 0;

  for (const occupation in occupationCount) {
    if (occupationCount[occupation] > maxCount) {
      maxCount = occupationCount[occupation];
      mostCommonOccupation = occupation;
    }
  }

  return mostCommonOccupation;
}

// Main function to generate data
function generateTestData(): Person[] {
  const data: Person[] = [];
  for (let i = 0; i < NUM_RECORDS; i++) {
    data.push(generatePerson(i + 1));
  }
  return data;
}

// Main function to analyze data
function analyzeTestData(data: Person[]): void {
  const averageAge = calculateAverageAge(data);
  console.log(`Average Age: ${averageAge}`);

  const averageIncome = calculateAverageIncome(data);
  console.log(`Average Income: ${averageIncome}`);

  const percentageWithChildren = calculatePercentageWithChildren(data);
  console.log(`Percentage of People with Children: ${percentageWithChildren}%`);

  const mostCommonOccupation = getMostCommonOccupation(data);
  console.log(`Most Common Occupation: ${mostCommonOccupation}`);
}

// Usage example
const testData: Person[] = generateTestData();
analyzeTestData(testData);

function generatePurchaseHistory(): Purchase[] {
  const numPurchases = getRandomInt(1, 10);
  const purchases: Purchase[] = [];
  for (let i = 0; i < numPurchases; i++) {
    purchases.push({
      id: generateRandomString(8),
      date: getRandomDate(new Date(2020, 0, 1), new Date())
        .toISOString()
        .split("T")[0],
      amount: parseFloat((Math.random() * 500).toFixed(2)), // Random amount up to $500
      category: getRandomElement(purchaseCategories),
      item: `Item-${generateRandomString(5)}`,
    });
  }
  return purchases;
}

// Generate all records
const records: Person[] = [];
for (let i = 1; i <= NUM_RECORDS; i++) {
  records.push(generatePerson(i));
}

// Generate and save data
const generatedTestData = generateTestData();
const jsonData = JSON.stringify(generatedTestData, null, 2);

fs.writeFileSync(path.join(__dirname, OUTPUT_FILE), jsonData);

console.log(`Generated ${NUM_RECORDS} records and saved to ${OUTPUT_FILE}`);