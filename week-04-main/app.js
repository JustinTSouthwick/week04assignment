//Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//Add a new age to your array and repeat the step above to ensure it is dynamic.
//Use a loop to iterate through the array and calculate the average age. 

const ages = [3, 9, 23, 64, 2, 8, 28, 93]; //Created the new array.

console.log(`New array here: ${ages}`);

const first = ages[0]; //Assigning first element in array to first.
const last = ages[ages.length - 1]; //Assigning last element in array to last.

console.log(`Subtracting first element from the last: ${last - first}`); //Subtracting the first value from the last value in the array.

ages.push(36); //Added an age to the end of the Array

console.log(`Ages array with added age: ${ages}`);

console.log(`Subtracting first element from the last in updated array: ${ages[ages.length -1] - ages[0]}`); //Using a different method to test the same subtraction.

//Using a for loop to find the average number in the ages array.
let sum = 0;

for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
};
const avgArray1 = sum / ages.length;
console.log(`The average number of the ages array is: ${avgArray1}`); 

//Question 2:Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//Use a loop to iterate through the array and calculate the average number of letters per name. 
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(`Names array here: ${names}`);

//used for loop to calculate the average number of letters per word in names array.
let count = 0;

for(let i = 0; i < names.length; i++) {
    count += names[i].length;
};
const avgLettersInNames = count / names.length;
console.log(`Average number of letters per word in names: ${avgLettersInNames}`);

//used a for loop to concatenate the names together with a space in between each.
let result = "";
for(let i = 0; i < names.length; i++) {
    result = result.concat(names[i] + " ");
};

console.log(result);

//Question 3: How do you access the last element of an array?
//Answer: array.length - 1

//Question 4: How do you access the first element of an array?
//Answer: array[0]

//Question 5:Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//Created a new array nameLengths and pushed the length of each name in the name array into the array. 
const nameLengths = [];

for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
};

console.log(`Length of each name in name array: ${nameLengths}`);

//Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let totalLetters = 0;

for(let i = 0; i < nameLengths.length; i++) {
    totalLetters += nameLengths[i];
};

console.log(`Number of letters in names array: ${totalLetters}`);

//Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord(word, n) {
    return word.repeat(n);
};
let repeat = repeatWord('Hey', 6)
console.log(`Repeating the word 6 times: ${repeat}`);


//Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function findFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
};
let fullName = findFullName('Justin', 'Southwick');
console.log(`Full name with a space in between: ${fullName}`);

//Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const numbers = [9, 31, 4, 16, 19, 27, 5];

function isGreaterThan100() {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } 
    if(sum > 100) {
        return true;
    } else {
        return false;
    }
    };


console.log(`Checking if the sum of numbers is greater than 100: ${isGreaterThan100(numbers)}`);

//Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.

function getAverage() {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
};
const avgArray2 = getAverage(numbers);
console.log(`Finding the average number of numbers array: ${avgArray2}`);

//Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//I used two prior arrays in this assignment for this function.
function avgIsGreater() {
    if(avgArray1 > avgArray2) {
        return true;
    } else{
        return false;
    }
};

console.log(`Checking if average of ages is greater than average of numbers: ${avgIsGreater()}`);

//Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 
function willBuyDrink(warm, cash) {
    if( warm && cash > 10.50){
        return true;
    } else {
        return false;
    }
};

console.log(`Checking if it's hot enough and we have enough money to buy a drink: ${willBuyDrink(true, 15.00)}`);

//Question 13: Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

//I wrote this function to check if I had the time to help a friend before an event. I took the time it'd take and added travel time, then checked it against total available time I had.
function canHelpFriend(time, travelTime, totalTime) {
    if(time + travelTime <= totalTime) {
        return true;
    } else {
        return false;
    }
};

console.log(`Do I have enough time to help my friend with his pc? ${canHelpFriend(60, 30, 100)}`);

