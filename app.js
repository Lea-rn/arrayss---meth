"use strict"

///// slice /////
//// khdhit copie : d'ont change the original array ..
//// mata7ssebech el end number ...


// let arr = ["a","b","c","d","e","f"] ; 

// console.log(arr)

// console.log(arr.slice(0,4)) ;

// console.log(arr)


/////// splice ::::

///// tfasakh partie : change the original array ...


// let arr = ["a","b","c","d","e","f"] ; 
// console.log("before" , arr)

// arr.splice(0,3)

// console.log("after" , arr)


//////// spread operators ::::

// let arr = ["a","b","c","d","e","f"] ; ///// "a","b"....

// console.log(arr)
// console.log(...arr)


// const x  = [
//     {name:"jhon" , country :"germany"} , 
//     {name : "paul" , country :"frensch"}
// ]

// console.log(...x)


///// reverse :::  (change the original array )


// let arr = ["a","b","c","d","e","f"] ;

// console.log(arr)

// arr.reverse()
// console.log(arr)


////// concat :::

// let arr = ["a","b","c","d","e","f"]
// let x = ["j","h","k","l","m"]

// console.log(arr , x)

// let z = x.concat(arr)

// console.log(z)


//// at :::

// let arr = ["a","b","c","d","e","f"]

// console.log(arr[2])
// console.log(arr.at(1))



////// for /////

// let numbers = [1,2,3,4,5,6,7,8,9,10] ; 

// for (let i = 0 ; i < numbers.length ; i++){
//     console.log(numbers[i])
// }


// for (let  i = numbers.length-1 ; i >= 0 ; i--){
//     console.log(numbers[i])
// }



/////// automatic for :: 


// let numbers = [1,2,3,4,5,6,7,8,9,10] ; 

// for (const ele of numbers){
//     console.log(ele)
// }

///// exemple ;;
const movements = [200,450,-400,1000,-800,100] ; 

for (const mov of movements ){
    if (mov > 0){
        console.log(`you deposit :${mov} `  )
    }

    else {
        console.log(`you withdraw : ${Math.abs(mov)}`)
    }
}




////// challanges ::
////////////////////////////////////////////////// problem solving ///////////////////////////////////

// Easy Problems::////////////////////////////////////////////
// Append an Element:
// const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////
/// answer ::
const arr = [1,2,3,4,5]
console.log(arr)
arr.push(6)
console.log(arr)


////// put your answer here ...........

// Remove the Last Element:
// Remove the last element from an array .

////// put your answer here ...........
arr.pop()
console.log(arr)


//////////////

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
// const arr = [1,2,3,4,5]


////// put your answer here ...........
// const arr = [1,2,3,4,5]

arr.unshift(0) ;
console.log(arr)

// Remove the First Element:
// Remove the first element from an array .
/////////////////
//
////// put your answer here ...........
arr.shift()
console.log(arr)



// Check if Element Exists:
// Write a function that checks if a given element exists .
// const arr = [1,2,3,4,5]

//// boolean ==> true or false

////// put your answer here .........ar..

// const arr = [1,2,3,4,5]
// console.log(arr.includes(3)) ;
// console.log(arr.includes(100))



// Combine two arrays into one .

///////////////////

const x = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

// ////// put your answer here ...........

const arr3 = x.concat(arr2)
console.log(arr3)




// Reverse an Array:
// Reverse the elements in an array .
const z = [6,7,8,9,10]

////// put your answer here ...........

z.reverse()
console.log(z)


//////////////////

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
const h = [6,7,8,9,10,20,30,50,60]

////// put your answer here ..........
////////////////////

console.log(h.slice(2,5))


// Splice :
//  remove 3 elements from an array starting from index 2.
const u = [6,7,8,9,10,20,30,50,60]

////// put your answer here ...........
///////////////////////////

u.splice(2,3)
console.log(u)


// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////


// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........


///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
/////////////////////

// const names = ["jhon" , "peter" , "mark"]



////////////////////

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////


// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........

////////////////
// const arr2 = [0, 8, 6, 10, 7, 11, 13];



// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.

////// put your answer here ...........

// const numbers = [1,10,2,10,5,6,10,100,6]



// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........


////////////////////



// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////


// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........
// const numbers = [2,10,5,7,10,8,50,10,50,8,200] ;

//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........




// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
////// put your answer here ...........

//////////////////////////////////////

// const numbers = [-1,-2,-3,10,-100,6,9,50]

