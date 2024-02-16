// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: will display indigo at the front spot of array
// b) Verify and explain: It did push indigo into array but displayed the number of elements in the array
// --------------------1) What will this log?

//const cohort = "LEARN 2023"
 //console.log(cohort.length)

// a) Your answer: should log the length of the characters in the string which is 9
// b) Verify and explain: so it logged 10 bc it is a string and not an array or else it would have been 0 indexed

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: should log the [4] placement in the string which would be l
// b) Verify and explain: logged "o" which makes sense bc whenever calling on the index of a string it starts at 0

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: i think it will log the ruby bc it is calling on the index placement [1]
// b) Verify and explain: logged "ruby" bc arrays with stings are 0 indexed 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
 //console.log(weekendDays.toUpperCase())

// a) Your answer: will call on strings in array and should return strings with all characters uppercased 
// b) Verify and explain: so logged it and returned an error saying to uppercase is not a function. Maybe bc there was no specification of which element in the array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 //console.log(typeof dataTypes.length)

// a) Your answer: i think this will return the amount of characters in each string in the array. So 5, 5, 6, and 8
// b) Verify and explain: just logged the first element in the array. typeof is used for string so soon as it read that it stopped producing the function
