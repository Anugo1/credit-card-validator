const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validNumber =  /^5[1-5][0-9]{14}$|^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)[0-9]{12}$/;

console.log("***************Welcome to my credit card checker!*****************")
rl.question("Enter your credit card number : ", (cardNumber) => {
  if(validNumber.test(cardNumber)){
    console.log("This is a mastercard✅....verified successfully!✨");
}else {
  console.log("Please enter a valid mastercard❌,try again♻!");
}
  rl.close();
});