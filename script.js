const convertBtn = document.getElementById("convert-btn");

const inputRum = document.getElementById("number");

const resultDisplay = document.getElementById("output")

const convertToRoman = (romanConverts) => {

let result = "";

const romNums = [
   { value: 1000, symbol: "M"},
   { value: 900, symbol: "CM"},
   { value: 500, symbol: "D"},
   { value: 400, symbol: "CD"},
   { value: 100, symbol: "C"},
   { value: 90, symbol: "XC"},
   { value: 50, symbol: "L"},
   { value: 40, symbol: "XL"},
   { value: 10, symbol: "X"},
   { value: 9, symbol: "IX"},
   { value: 5, symbol: "V"},
   { value: 4, symbol: "IV"},
   { value: 1, symbol: "I"}
  ];


  for (let i = 0; i < romNums.length; i++) {
    while (romanConverts >= romNums[i].value) {
      result += romNums[i].symbol;
      romanConverts -= romNums[i].value;
    }
  }

  return result;
};


convertBtn.addEventListener("click", () => {
  const noInput = inputRum.value.trim();



  if (noInput === "") {
    resultDisplay.textContent = "Please enter a valid number";
    return;
  } else if (noInput >= 4000) {
    resultDisplay.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const userInput = parseInt(inputRum.value);
  
  if (isNaN(userInput) || userInput <= 0) {
    resultDisplay.textContent = "Please enter a number greater than or equal to 1";
    return;
  }  

  const romanResult = convertToRoman(userInput);

  resultDisplay.textContent = romanResult;
});