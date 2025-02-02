# Regex Mastercard validator
### This is a program that takes input and validates if it matches the regex of the normal mastercard credit card

## To run the program

**input** `node validate.js` on the console and input the mastercard pin that you have.

Example: ``` ***************Welcome to my credit card checker!*****************
Enter your credit card number : 5123456789012345 
This is a mastercard✅....verified successfully!✨```

## Code structure 
### Explaining the code

- Uses the readline module to accept input from the user.
- Defines a regex pattern that validates Mastercard numbers (both old and new ranges).
- Displays a welcome message.
- Prompts the user to enter a credit card number.
- Checks if the input matches the Mastercard format.
Outputs a success message if valid or an error message if invalid.
- Closes the input stream after processing.