////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

// function logLargerInteger(x,y){
//   if (x>y){
//     console.log(x)
//   } else{
//     console.log(y)
//   }
// }
// logLargerInteger(2,3)

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

// let score = 77
// if (score < 55){
//   console.log('Grade: F')
// } else if (score < 70) {
//   console.log('Grade: D')
// } else if (score < 80) {
//   console.log('Grade: C')
// } else if (score < 90) {
//   console.log('Grade: B')
// } else {
//   console.log('Grade: A')
// }

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

// let sentence = 'Sabrina';
// let index = 4;
// console.log(sentence.charAt(index));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// let text = "Teddy"
// let code = text.charCodeAt(2)
// console.log(code)

//Unicode is a way of assigning numerical values to characters in different languages and scripts so that the languages/scripts can be accessed from any platform or software.

// Using fromCharCode() - make it readable for us :). You'll see!  

// let text = String.fromCharCode(72, 69, 76, 76, 79)
// console.log(text)

// let char = String.fromCharCode(65)
// console.log(char)

// Take your first and last name and concat()

// let x = 'John'
// let y = 'Vresilovic'
// console.log(x + ' ' + y)

// Create a string and make it return true using startsWith() 

// let text = "Hello world, welcome to the universe.";
// if (text.startsWith("Hello")) {
// console.log('True')
// } else {
//   console.log('False')
// }

// Now use any variable with endsWith() and return false 

// let text = "Hello world, welcome to the universe.";
// if (text.endsWith("Hello")) {
// console.log('True')
// } else {
//   console.log('False')
// }

// Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
// if (ozgur.includes('Sun')) {
//   console.log('True')
// } else {
//   console.log('False')
// }

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// let indexOfCow = joshHadALittleLambOopsCow.indexOf('cow')
// console.log(indexOfCow)

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d === d)
// console.log(d != a)
// console.log(a < 15)
// console.log(a < b < c)
// console.log(c > b > a != d)


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

// let roomSpins = 0
// for (i = 1; i <= 10; i++) {
//   roomSpins++
// }
// console.log('The room spun ' + roomSpins + ' times!')

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

// let teosVision = 0
// for (i = 1; i <= 20; i++) {
//   teosVision++
// }
// console.log(teosVision)

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

// let i = 1
// while (i <= 20) {
//   console.log("I'm sorry!")
//   i++
// }

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
// const whateverQueenBeySaid = {
//     thing1: 'shoes',
//     thing2: 'clothes',
//     thing3: 'gaming console'
//   }
// for (const propertyName in whateverQueenBeySaid) {
//   console.log(propertyName)
// }
  
  // Using (FOR IN LOOP), print the indexes of the array.
  
  // const lana = ['l', 'a', 'n', 'a']
  // for (const index in lana) {
  //       console.log(index)
  // }

  // USE (FOR OF LOOP)!
  
  // const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  //   for (x of tia) {
  //     let text = ""
  //     text += x
  //   console.log(text)
  // }  
  
  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 

  //   const perscholas = ['Amira', 'Arely', 'Jonathan']
//   let v = "PS"
// perscholas.forEach(printName)
// function printName(item) {
//   console.log(item + ', ' + v)
// }

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push() - adds an item to the end of an array
// pop() - removes the last item from an array
// unshift() - adds an item to the beginning of an array
// shift() - removes the first item from an array
// concat() - combines two or more arrays
// splice() - adds or removes items from an array
// slice() - creates a new array using items copied from an existing one
// sort() - sorts the items in an array
// includes() - returns true if an array contains a specified item
// indexOf() - returns the first index of a specified item
// length - returns the number of items in an array

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ];
// shoppingList.push('Hendricks gin')
// console.log(shoppingList)

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// yoda.reverse()
// console.log(yoda)

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
// let nowServing = ""
// for (i = 0; i < waitList.length; i++) {
// nowServing = waitList[i]
// console.log((i + 1) + '. ' + nowServing)
// }

//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];
// let shoeString = ""
// for (a = 0; a < shoe.length; a++) {
//   shoeString = shoeString + shoe[a] + ' '
// }
// console.log(shoeString)

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// const numbersOne = [15, 17, 19];
// const numbersTwo = [43, 53, 63];
// const numbersCombined = [...numbersOne, ...numbersTwo]
// console.log(numbersCombined)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// const numbers = [87, 7, 2321]
// const places = ['Montreal','Newcastle','Dusseldorf']
// const newVar = [...numbers, ...places]
// console.log(newVar)

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// function maxOfTwoNumbers(x,y) {
//   if (x > y) {
//     console.log(x)
//  } else {
//   console.log(y)
//  }
// }
// maxOfTwoNumbers(74561,831)

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// function maxOfThree(x,y,z) {
//   if (x > y && x > z) {
//     console.log(x)
//   } else if (y > x && y > z) {
//     console.log(y)
//   } else {
//     console.log(z)
//   }
// }
// maxOfThree(88,341,133)

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

