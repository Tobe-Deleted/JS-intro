/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Do NOT change the name of any of the
functions in this assignment, it will disable the automated unit testing.

0.

Complete the function below:

Return true from this function to see how the testing works

Read the terminal output before and after to see the difference

******************************************************************************/

export function start() {
  return true;
}

/******************************************************************************
1.

Complete the function below:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

HINT: Use the modulo operator (%) Google it! 😊
******************************************************************************/

export const oddOrEven = (n) => {
  if (n % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
};

/******************************************************************************
2.

Complete the function below:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

export function makeMeLoud(text) {
  return text.toUpperCase() + "!";
}

/******************************************************************************
3.

Complete the function below:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23


******************************************************************************/

export const greeter = (string, number) => {
  if (number < 0 || number > 23) {
    return "Invalid time";
  } else {
    if (number < 6) {
      return "Good night" + " " + string;
    }
    if (number > 5 && number < 12) {
      return "Good morning" + " " + string;
    }
    if (number > 11 && number < 18) {
      return "Good day" + " " + string;
    }
    if (number > 17 && number < 24) {
      return "Good evening" + " " + string;
    }
  }
};

/******************************************************************************
4.

Complete the function below:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

export function arrayTrimmer(array) {
  return array.slice(1, -1);
}

/******************************************************************************
5.

Complete the function below:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

export const cleanAndFun = (stringParameter) => {
  return stringParameter.replace("hard", "fun").trim();
};

/******************************************************************************
6.

Complete the function below:

The function should take in an array as a parameter.

The automatic testing will test your function with the following array:
["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

 Return the resulting array.
******************************************************************************/

export function marvelEditor(arrayParameter) {
  let newArray = arrayParameter.slice(1);
  newArray.splice(2, 1, "Skrull");
  newArray.splice(0, 2, "Captain America");
  return newArray.toString().replaceAll(",", "💪");
}

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

export function coolMaker(variable) {
  if (typeof variable == "string") {
    return `😎${variable}😎`;
  } else if (typeof variable == "number") {
    variable = variable * 2;
    return `😎${variable}😎`;
  } else if (typeof variable == "boolean") {
    if (variable) {
      return "😎Yeah😎";
    } else {
      return "😎Chill😎";
    }
  } else {
    return "😎Primitive values only😎";
  }
}

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

export const addOrRemove = (array, string) => {
  const index = array.indexOf(string);
  if (index > -1) {
    array.splice(index, 1);
    return array;
  } else {
    array.push(string);
    return array;
  }
};
