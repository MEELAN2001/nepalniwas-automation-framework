# 🏠 Nepalniwas Automation

Automation testing project for the **Nepal Niwas** platform, focused on improving software quality through structured and maintainable test automation.

## 📌 Overview

This repository contains automated test scripts designed to validate core functionalities of the Nepal Niwas system. It helps reduce manual testing effort, improve accuracy, and ensure consistent application behavior.

## 🚀 Features

* Automated functional testing
* End-to-end test scenarios
* Reusable Page Object Model (POM) structure
* Clear test reporting
* Easy to scale and extend

## 🛠️ Tech Stack

* **Framework:** Playwright
* **Language:** JavaScript 
* **Test Runner:** Playwright Test
* **Reporting:** Built-in HTML Reporter

## 📂 Project Structure

```
Nepalniwas_Automation/
│── tests/            # Test cases
│── pages/            # Page Object Models
│── utils/            # Helper functions
│── fixtures/         # Test data and setup
│── config/           # Configuration files
│── reports/          # Test reports
```

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project:

   ```bash
   cd Nepalniwas_Automation
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

## ▶️ Running Tests

* Run all tests:

  ```bash
  npx playwright test
  ```
* Run in headed mode:

  ```bash
  npx playwright test --headed
  ```
* Run specific test:

  ```bash
  npx playwright test <test-file-name>
  ```

## 📊 Reports

View the test report after execution:

```bash
npx playwright show-report
```

## 🔄 Future Improvements

* CI/CD pipeline integration (GitHub Actions / Jenkins)
* Advanced reporting (Allure)
* Cross-browser and parallel execution enhancements

## 🎯 Objectives

* Improve test coverage
* Ensure application stability
* Detect bugs early
* Support efficient QA processes

## 🤝 Contribution

Feel free to fork the repository and contribute by submitting pull requests.

## 📄 License

This project is intended for learning and internal use.

