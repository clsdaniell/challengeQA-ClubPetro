## Automation (Cypress)

The automation part of the following challenge was completed: https://github.com/ClubPetro/qa-challenge

In this step, you will validate a webpage, in this case, our landing page https://clubpetro.com/. Analyze the page and create an automation that validates the following scenarios:

Note: Lines marked with (\*) at the end are not mandatory for the automation challenge, but they will be an additional differential.

- In our navbar, we have the item "O ClubPetro". We must validate that when the user interacts by clicking on this item, it will open the Dropdown Menu with three more items.
- Among these three items of the Dropdown Menu, we will validate that clicking on the "Quem Somos" item will redirect to the https://clubpetro.com/sobre page.
- Validate the URL after redirection\*.
- Validate the loading of the descriptive text "Feito de revendedor para revendedor" on the About page.
- On the same page, we must validate the loading of the ClubPetro CEO's image\*.
- On the same page, we must validate the loading of the "O que é o ClubPetro" video\*.
- On the same page, we must scroll down to the bottom and validate that all the copyright text is written correctly: "2021 ClubPetro. Todos os direitos reservados."
- Going back to interacting with the navbar, we must validate the redirection of the "Contato" item.
- Validate the URL after redirection\*.
- On the contact page, the form must be filled out and submitted.
- Validate the submission confirmation\*.

### Requirements

- The project needs to be configured to run on a macOS or Ubuntu environment.
- You must attach to your project the Postman collection with all the validated endpoints and usage examples.
- To run your code, we must only execute the following commands:

```
git clone $your-fork
cd $your-fork
command to install dependencies
command to run the application
```

### Evaluation criteria

- Code organization
- Clarity
- Assertiveness
- Code readability
- Code reuse
- Technical choices

# Cypress Project with Yarn

This is a sample project that demonstrates how to use Cypress with the Yarn package manager.

## Installation

To install the project dependencies, run the following command:

```
yarn install
```

## Configuration

The `cypress.json` file contains the Cypress configuration for this project. Make sure the configuration meets your needs before running the tests.

## Running the Tests

To run the tests, run the following command:

```
yarn cypress run
```

This will start Cypress in command-line mode and run all the tests in the `cypress/e2e` directory.

If you want to run the tests in interactive mode, run the following command instead:

```
yarn cypress open
```

This will start Cypress in interactive mode and display the Cypress GUI, allowing you to run the tests interactively.

## Directory Structure

The `cypress/e2e` directory contains all the project's tests. You can add new tests or modify existing tests in this directory.

The `cypress/support` directory contains support files, such as custom commands or utility functions. These files are automatically loaded by Cypress before each test.

## Cypress Documentation

For more information about Cypress, see the official documentation at [https://docs.cypress.io](https://docs.cypress.io).
