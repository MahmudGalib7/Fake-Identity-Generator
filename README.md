# 🎩 Fake Identity Generator
Welcome to the Fake Identity Generator project! This TypeScript tool helps you generate large-scale synthetic data for testing purposes. With it, you can create up to 100,000 user profiles, each containing personal, contact, socioeconomic, and social data. 📊


## 🛠 Features
✨ High Volume Data: Generate up to 100,000 profiles
📇 Detailed Profiles: 
   Every profile includes:
     - 👤 Basic info (name, age, etc.)
     - 📍 Contact (address, phone)
     - 💵 Financial details (income, credit score)
     - 🌐 Social (interests, social links)



## 📋 Data Structure
Each profile includes:

- **ID**: Unique identifier
- **Personal** Details: Name, email, age, birth date
- **Address**: Street, city, state, zip code, country
- **Contact**: Phone number, occupation
- **Financial**: Income, credit score, purchase history
- **Social**: Marital status, education, social media links
- **Additional**: Hobbies, interests, children status

## 🚀 Getting Started

Clone this repository.
<br>
Install dependencies (requires Node.js and TypeScript).
<br>
**Run:**

```bash
ts-node index.ts
```
✨ The generated dataset will be saved to `testData.json` in the project directory.

## Sample Code Snippet

```typescript

import * as fs from "fs";
import * as path from "path";

const NUM_RECORDS = 100000;
const OUTPUT_FILE = "testData.json";

function generatePerson(id: number): Person {
  // Random data generation here...
}

function generateDataset() {
  const data = [];
  for (let i = 0; i < NUM_RECORDS; i++) {
    data.push(generatePerson(i + 1));
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
}

generateDataset();
```

## 📊 Data Summary
Below is a sample data distribution for the generated dataset:

``` mermaid
graph TD;
    Profile-->PersonalDetails;
    Profile-->ContactDetails;
    Profile-->Financial;
    Profile-->Social;
    Profile-->Additional;
```

This graph shows how each profile’s data is organized by categories!

## ⚙️ Customization

- Change `NUM_RECORDS` to adjust profile count.
- Edit arrays like `firstNames`, `occupations` for custom values.
- Modify data fields and randomization for specific needs.

## 📅 Future Improvements

📝 Additional fields
<br>
💡 More realistic data (e.g., address formats)
<br>
📊 Expanded purchaseHistory

## 📜 License
This project is licensed under the MIT License.
<br>

### Happy Coding! 🎉
