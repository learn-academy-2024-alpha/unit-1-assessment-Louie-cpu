// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// const stringSorter =(str1, str2) =>{
//     if(str1.length > str2.length){
//         return(fruit3)
//     } else if(str1.length < str2.length){
//         return(fruit4)
//     } else ("same amount of characters")
// }
//     console.log(stringSorter(fruit3, fruit4))

// Explain your code:
//input is going to be our variables given which are fruit1-4
//we want our code to output the string with the most amount of characters
//create a function that will check how many characters are in each string 
//function should also be able to compare 2 different strings 
//code should return string with most characters  

//i got the answer, however i know theres another more accurate way to achieve it. Was trying to use string interpolation but my code was missing something, after trouble shooting a bunch of times this was what i managed.   

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// Expected output: 15
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 17
// const sumArr = array =>{
// let newArr =[]
// let sum = 0
//     for(let i = 0; i < array.length; i++)
//      sum += [i]  
// }
// console.log(sumArr(padres1984WorldSeriesRuns))
// first try
// let sum = 0;
//     for(let i = 0; i < padres1998WorldSeriesRuns.length; i++){
//         sum += padres1998WorldSeriesRuns[i];
//     }
//     console.log(sum)
// second try with some help from google :D  
// Explain your code:
//created a function that would sum up our array 
// our input is the array of world series runs 
//knew we would need a for loop. i had some trouble as far as execution but i knew the pieces necessary to find our answer just missing certain placements
// function should return sum of all elements in each array 

// --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"
const lionKing = "Simba"
// // Expected output: "abmiS"
// console.log(lesMiserables.split("").reverse("").join(""))
// console.log(lionKing.split("").reverse("").join(""))

// Explain your code:
// input variables given above
//used method that turns string into an array
//used method with characters in reversed order
//used method to join each individual character
//return should be chracters in string together in reversed order

//honestly i dont think i did what the question asked which was create a new function but still stoked i managed to find the answer. It seemed a lot simpler than i thought 

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]

const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// const array345 =(stockArr) =>{
//     return stockArr.filter((value, index) =>{
//         return indexOf[3,4,5]  
//     })
//  } 
//   console.log(array345(stockExchange))

// Explain your code:
//created my function to extrapolate index 3,4,5
// tried using filter to go thru index of array but know im missing something 