
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validNumber =  /^5[1-5][0-9]{14}$|^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)[0-9]{12}$/;

console.log("***************Welcome to my credit card checker!*****************");

rl.question("Enter your credit card number : ", (cardNumber) => {

  if(validNumber.test(cardNumber)){
    console.log("This is a mastercard✅....verified successfully!✨");
}else {
  console.log("Please enter a valid mastercard❌,try again♻!");
}
  rl.close();

});

/*
Regex Breakdown:

1️ `^5[1-5][0-9]{14}$`  
   - `^` → Ensures the number starts from the beginning.  
   - `5[1-5]` → The first digit must be 5, and the second must be between 1 and 5 (51-55).  
   - `[0-9]{14}` → Followed by 14 more digits (ensuring a total of 16 digits).  
   - `$` → Ensures the number ends after 16 digits.  
    Matches old Mastercard numbers: e.g., `5123456789012345`, `5512345678901234`.  

2️ `|^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)[0-9]{12}$`  
   - `|` → OR operator (matches either the old range or the new range).  
   - `^(222[1-9] | 22[3-9]\d | 2[3-6]\d{2} | 27[0-1]\d | 2720)`  
     - Covers new Mastercard numbers that start from `2221` to `2720`.  
     - `222[1-9]` → Covers `2221` to `2229`.  
     - `22[3-9]\d` → Covers `2230` to `2299`.  
     - `2[3-6]\d{2}` → Covers `2300` to `2699`.  
     - `27[0-1]\d` → Covers `2700` to `2719`.  
     - `2720` → Covers exactly `2720`.  
   - `[0-9]{12}$` → Followed by 12 more digits (ensuring a total of 16 digits).  
    Matches new Mastercard numbers: e.g., `2221001234567890`, `2720998765432100`.  
*/