// Знайти суму та кількість позитивних елементів
arrayConst = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

sumPositive = 0;
countPositive = 0;
for (i = 0; i < arrayConst.length; i++){
  if (arrayConst[i] > 0){
    sumPositive += arrayConst[i];
    countPositive++;
  }
}
console.log(`Sum of positive elements ${sumPositive}`);
console.log(`Count of positive elements ${countPositive}`);


// Знайти мінімальний елемент масиву та його порядковий номер
minElement = arrayConst[0];
minIndex = 0;
for (i = 1; i < arrayConst.length; i++) {
  if (arrayConst[i] < minElement) {
    minElement = arrayConst[i];
    minIndex = i;
  }
}
console.log(`Minimum element: ${minElement}`);
console.log(`Number in the order of the minimum element: ${minIndex}`);


// Знайти максимальний елемент масиву та його порядковий номер
maxElement = arrayConst[0];
maxIndex = 0;
for (i = 1; i < arrayConst.length; i++) {
  if (arrayConst[i] > maxElement) {
    maxElement = arrayConst[i];
    maxIndex = i;
  }
}
console.log(`Maximum element: ${maxElement}`);
console.log(`Number in the order of the maximum element: ${maxIndex}`);


// Визначити кількість негативних елементів
countNegative = 0;
for (i = 0; i < arrayConst.length; i++) {
  if (arrayConst[i] < 0) {
    countNegative++;
  }
}
console.log(`Count of negative elements: ${countNegative}`);


// Знайти кількість непарних позитивних елементів
countOddPositive = 0;
for (i = 0; i < arrayConst.length; i++) {
  if (arrayConst[i] > 0 && arrayConst[i] % 2 !== 0) {
    countOddPositive++;
  }
}
console.log(`Count of odd positive elements: ${countOddPositive}`);


// Знайти кількість парних позитивних елементів
countEvenPositive = 0;
for (i = 0; i < arrayConst.length; i++) {
  if (arrayConst[i] > 0 && arrayConst[i] % 2 === 0) {
    countEvenPositive++;
  }
}
console.log(`Count of even positive elements: ${countEvenPositive}`);


// Знайти суму парних позитивних елементів
sumEvenPositive = 0;
for (i = 0; i < arrayConst.length; i++) {
if (arrayConst[i] > 0 && arrayConst[i] % 2 === 0) {
sumEvenPositive += arrayConst[i];
}
}
console.log(`Sum of even positive elements: ${sumEvenPositive}`);


// Знайти суму непарних позитивних елементів
sumOddPositive = 0;
for (i = 0; i < arrayConst.length; i++) {
if (arrayConst[i] > 0 && arrayConst[i] % 2 !== 0) {
sumOddPositive += arrayConst[i];
}
}
console.log(`Sum of odd positive elements: ${sumOddPositive}`);


// Знайти добуток позитивних елементів
productPositive = 1;
for (i = 0; i < arrayConst.length; i++) {
if (arrayConst[i] > 0) {
productPositive *= arrayConst[i];
}
}
console.log(`Product of positive elements: ${productPositive}`);


// Знайти найбільший серед елементів масиву, остальні обнулити
maxValue = arrayConst[0];
for (i = 1; i < arrayConst.length; i++) {
if (arrayConst[i] > maxValue) {
maxValue = arrayConst[i];
}
}
for (i = 0; i < arrayConst.length; i++) {
if (arrayConst[i] !== maxValue) {
arrayConst[i] = 0;
}
}
console.log(`The largest among the elements of the array, the rest are set to zero: ${arrayConst}`);

