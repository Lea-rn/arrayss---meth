// "use strict"

// ///// slice /////
// //// khdhit copie : d'ont change the original array ..
// //// mata7ssebech el end number ...

// // let arr = ["a","b","c","d","e","f"] ;

// // console.log(arr)

// // console.log(arr.slice(0,4)) ;

// // console.log(arr)

// /////// splice ::::

// ///// tfasakh partie : change the original array ...

// // let arr = ["a","b","c","d","e","f"] ;
// // console.log("before" , arr)

// // arr.splice(0,3)

// // console.log("after" , arr)

// //////// spread operators ::::

// // let arr = ["a","b","c","d","e","f"] ; ///// "a","b"....

// // console.log(arr)
// // console.log(...arr)

// // const x  = [
// //     {name:"jhon" , country :"germany"} ,
// //     {name : "paul" , country :"frensch"}
// // ]

// // console.log(...x)

// ///// reverse :::  (change the original array )

// // let arr = ["a","b","c","d","e","f"] ;

// // console.log(arr)

// // arr.reverse()
// // console.log(arr)

// ////// concat :::

// // let arr = ["a","b","c","d","e","f"]
// // let x = ["j","h","k","l","m"]

// // console.log(arr , x)

// // let z = x.concat(arr)

// // console.log(z)

// //// at :::

// // let arr = ["a","b","c","d","e","f"]

// // console.log(arr[2])
// // console.log(arr.at(1))

// ////// for /////

// // let numbers = [1,2,3,4,5,6,7,8,9,10] ;

// // for (let i = 0 ; i < numbers.length ; i++){
// //     console.log(numbers[i])
// // }

// // for (let  i = numbers.length-1 ; i >= 0 ; i--){
// //     console.log(numbers[i])
// // }

// /////// automatic for ::

// // let numbers = [1,2,3,4,5,6,7,8,9,10] ;

// // for (const ele of numbers){
// //     console.log(ele)
// // }

// ///// exemple ;;
// const movements = [200,450,-400,1000,-800,100] ;

// for (const mov of movements ){
//     if (mov > 0){
//         console.log(`you deposit :${mov} `  )
//     }

//     else {
//         console.log(`you withdraw : ${Math.abs(mov)}`)
//     }
// }

//////// forEach /////////////////////////:::
// const names = ["peter" , "jhon" , "mark"] ;

// names.forEach(function(ele,i){     ///// methode array + parametre( anonymos func) ===> higher order functions ....
// console.log(`index ${i} : ${ele}`)
// })

// const movements = [200,450,-400,1000,-800,100] ;

// movements.forEach(function(ele,i){
// if (ele > 0){
//     console.log(`mouvement ${i+1} : you deposit ${ele}`)
// } else {
//     console.log(`mouvement ${i+1} : you withdraw ${Math.abs(ele)}`)
// }
// })

///////////////// sort :::

// let numbers = [10,2,5,100,6,9,30] ;

// console.log(numbers)

// const result = numbers.sort(function(a,b){
//  return a - b
// })

// console.log(result)

// ////// challanges ::
// ////////////////////////////////////////////////// problem solving ///////////////////////////////////

// // Easy Problems::////////////////////////////////////////////
// // Append an Element:
// // const arr = [1,2,3,4,5]
// // Given an array of numbers, add a new number to the end of the array .
// ////////////////////
// /// answer ::
// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.push(6)
// console.log(arr)

// ////// put your answer here ...........

// // Remove the Last Element:
// // Remove the last element from an array .

// ////// put your answer here ...........
// arr.pop()
// console.log(arr)

// //////////////

// // Insert at the Beginning:
// // Add an element at the start of an array .
// ////////////////////
// // const arr = [1,2,3,4,5]

// ////// put your answer here ...........
// // const arr = [1,2,3,4,5]

// arr.unshift(0) ;
// console.log(arr)

// // Remove the First Element:
// // Remove the first element from an array .
// /////////////////
// //
// ////// put your answer here ...........
// arr.shift()
// console.log(arr)

// // Check if Element Exists:
// // Write a function that checks if a given element exists .
// // const arr = [1,2,3,4,5]

// //// boolean ==> true or false

// ////// put your answer here .........ar..

// // const arr = [1,2,3,4,5]
// // console.log(arr.includes(3)) ;
// // console.log(arr.includes(100))

// // Combine two arrays into one .

// ///////////////////

// const x = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// // ////// put your answer here ...........

// const arr3 = x.concat(arr2)
// console.log(arr3)

// // Reverse an Array:
// // Reverse the elements in an array .
// const z = [6,7,8,9,10]

// ////// put your answer here ...........

// z.reverse()
// console.log(z)

// //////////////////

// // Slice a Subarray:
// // Extract a subarray from a given array. Return elements between index 2 and 5.
// const h = [6,7,8,9,10,20,30,50,60]

// ////// put your answer here ..........
// ////////////////////

// console.log(h.slice(2,5))

// // Splice :
// //  remove 3 elements from an array starting from index 2.
// const u = [6,7,8,9,10,20,30,50,60]

// ////// put your answer here ...........
// ///////////////////////////

// u.splice(2,3)
// console.log(u)

// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////
// const num = [2,5,6,8] ;

// const sumNumOfArray = function (arr){
//  let sum = 0 ;
//  arr.forEach((ele)=> sum = sum + ele)
//  return sum ;
// }

// console.log(sumNumOfArray(num))

// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........
// const arr = [1,2,3,4,5,6]
// let index = 2 ;
// console.log(arr) ;
// arr.splice(index,1)
// console.log(arr)

///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
/////////////////////

// const names = ["jhon" , "peter" , "mark"]
// console.log(names) ;
// names.splice(1,2 ,"nicole" , "mohamed")
// console.log(names)

////////////////////

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////

// const arr1 = [5,3,2,1,4] ;
// const arr2 = [9,8,6,10,7] ;
// console.log(arr1)
// console.log(arr2)

// const arr3 = arr1.concat(arr2) ;
// console.log(arr3)

// arr3.sort((a,b)=> a - b)

// console.log(arr3)

// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........

////////////////
// const arr2 = [0, 8, 6, 10, 7, 11, 13];

///// first method :

// function max (arr){
// let maxNumber = arr[0] ;   ///// 10
// arr.forEach((num)=> {
//     if (num > maxNumber){
//         maxNumber = num
//     }
//     // return maxNumber
// })
//  return maxNumber
// }

// console.log(max(arr2))

/////// second method :
// const arr2 = [0, 8, 6, 10, 7, 11, 13];
// console.log(arr2)

// arr2.sort((a,b)=> a - b)
// console.log(arr2)

// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.

////// put your answer here ...........

// const numbers = [1, 10, 2, 10, 5, 6, 10, 100, 6];

// console.log(numbers);

// function countElement(arr, value) {
//   let count = 0; //2
//   arr.forEach((ele) => {
//     /// 1
//     if (ele === value) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(countElement(numbers, 6));

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........
// const num = [1,-2,3,5,80,5,60,-90] ;
// console.log(num)

// function positiveNumbers (arr){
//     let positive = [] ;
// arr.forEach((num)=>{
//     if (num > 0){
//         positive.push(num)
//     }
// })
// return positive ;
// }

// console.log(positiveNumbers(num))
////////////////////

// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////

// const arrFlatten = [[1,2,3] , [10,20,30] , [50,60,100]] ; ///// [1,2,3,10,20,30,50,60,100] ;
// console.log(arrFlatten)

// function flatten (arr) {
//     let flat = [] ;   //// [1,2,3,10,20,30]
//     arr.forEach((ele)=> flat = flat.concat(ele))   //// [].conctat([1,2,3]) /// [1,2,3].concat([10,20,30])
//     return flat
// }

// console.log(flatten(arrFlatten))

// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........
// const numbers = [2,10,5,7,10,8,50,10,50,8,200] ;
// console.log(numbers)

// function removeDuplicates (array){
//     let withouDouble = [] ;  //// [10]
//     array.forEach((ele)=>{    //// 2
//         if (!withouDouble.includes(ele)){
//             withouDouble.push(ele)
//         }
//     })
//     return withouDouble
// }

// console.log(removeDuplicates(numbers))

//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........

// const numbers = [2, 10, 5, 7, 10, 8, 50, 10, 50, 8, 200];
// console.log(numbers);

// function removeElement(arr, value) {
//   arr.forEach((ele, i) => {  
//     if (ele === value) {
//       arr.splice(i, 1);
//     }
//   });
//   return arr;
// }

// console.log(removeElement(numbers, 10));

// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method. /
////// put your answer here ...........

//////////////////////////////////////

// const numbers = [-1,-2,-3,10,-100,6,9,50]
// console.log(numbers)

// function descending (arr){
   
//     const result = arr.sort((a,b)=> a - b).reverse()
//     return result
// }


// console.log(descending(numbers))
