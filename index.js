// // firstNumber = prompt ('Please enter the first number?');
// // secondNumber = prompt ('Please enter the second number?');
// // minus = (+firstNumber) - (+secondNumber);
// // plus = (+firstNumber) + (+secondNumber);
// // multiplication = (+firstNumber) * (+secondNumber);
// // divide = (+firstNumber) / (+secondNumber);
// // alert (firstNumber + '-' + secondNumber + '=' + minus);
// // alert (firstNumber + '+' + secondNumber + '=' + plus);
// // alert (firstNumber + '*' + secondNumber + '=' + multiplication);
// // alert (firstNumber + '/' + secondNumber + '=' + divide);


// // firstRow = prompt ('Please enter your first name?')
// // secondRow = prompt ('Please enter your second name?')
// // thirthRow = prompt ('Please enter your nationality?')
// // console.log(firstRow + ' ' + secondRow + ' ' + thirthRow);

// // numbers = prompt ('Please enter 5 numbers?')
// // newNumbers = numbers.toString().replaceAll('', ' ');
// // console.log(newNumbers);

// // firstNub = parseFloat (prompt ('Please enter your first number?'));
// // secondtNub = parseFloat (prompt ('Please enter your second number?'));
// // thirthNub = parseFloat (prompt ('Please enter your thirth number?'));

// // averageNum = (firstNub + secondtNub + thirthNub) / 3;
// // alert(`Your average number is  ${averageNum} !`);


// birthYear = prompt('Please enter your year of birth?');
// city = prompt('What is your city?');
// typeOfSport = prompt('What is your favorite sport?');

// currentYear = new Date().getFullYear();
// age = currentYear - birthYear;

// messageBirth =`Your ${age} years old.`;

// if (!birthYear) {
//     messageBirth = (`It's a pity that you didn't want to enter your year of birth!`);
//   } 


// messageCity = `You live in city ${city}`;

// if (city === "Kyiv") {
//     messageCity = `You live in the capital of Ukraine, ${city}.`;
// } else if (city === "Washington") {
//     messageCity = `You live in the capital of USA, ${city}.`;
// } else if (city === "London") {
//     messageCity = `You live in the capital of Great Britain, ${city}.`;
// }
// else if (!city) {
//     messageCity = `It's a pity that you didn't want to enter your city!`;
// }


//   mma = ('Jonathan Dwight Jones');
//   box = ('Volodymyr Klichko');
//   football = ('Lionel Messi');

//   messageSport = `Cool! Do you want to become ${typeOfSport} ?`;

//   if (typeOfSport === "mma") {
//     messageSport = `Cool! Do you want to become ${mma} ?`; 
//   } else if (typeOfSport === "box") {
//     messageSport = `Cool! Do you want to become ${box} ?`; 
//   } else if (typeOfSport === "football") {
//     messageSport = `Cool! Do you want to become ${football} ?`; 
//   }
//   else if (!typeOfSport) {
//     messageSport = (`It's a pity that you didn't want to enter your favorite sport!`);
//   }
//   else{
//     messageSport = `Your favorite sport is `  + typeOfSport;
//   }

// alert(` ${messageBirth} ${messageCity}  ${ messageSport}`);

 
let operator = prompt('What operation do you want to perform? (+, -, *, /)');

while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
  operator = prompt('Operator is invalid. Please enter a valid operator (+, -, *, /)');
}

let countOperands = parseInt(prompt('How many operands do you want to use from 2 to 6?'));
while (countOperands < 2 || countOperands > 6 || isNaN(countOperands)) {
  countOperands = parseInt(prompt('The number of operands is incorrect. Please enter a number between 2 and 6.'));
}

let operands = [];
let count = 0;
while (count < countOperands) {
let operand = parseFloat(prompt(`Enter operand ${count+1}:`));
if (!isNaN(operand)) {
operands[count] = operand;
count++;
} else {
alert("Invalid input! Please enter a number.");
}
}

let result;
switch (operator) {
  case "+":
    result = operands[0] + operands[1];
    if (countOperands > 2) {
      let count = 2;
      while (count < countOperands) {
        result += operands[count];
        count++;
      }
    }
    break;
    
  case "-":
    result = operands[0] - operands[1];
    if (countOperands > 2) {
      let count = 2;
      while (count < countOperands) {
        result -= operands[count];
        count++;
      }
    }
    break;

  case "/":
    result = operands[0] / operands[1];
    if (countOperands > 2) {
      let count = 2;
      while (count < countOperands) {
        result /= operands[count];
        count++;
      }
    }
    break;

  case "*":
    result = operands[0] * operands[1];
    if (countOperands > 2) {
      let count = 2;
      while (count < countOperands) {
        result *= operands[count];
        count++;
      }
    }
    break;
}

alert(`The results is ${result}.`);