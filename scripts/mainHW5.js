// 1=================================================================

//  function arrOne (value, length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(value);
//     }
//      return arr;
//  }
//
// console.log(arrOne("a", 8));

// 2 =================================================================

// function isNumberRange(num) {
//     return num > 0 && num < 10;
// }
//
// console.log(isNumberRange(-4));
// console.log(isNumberRange(5));
// console.log(isNumberRange(58));

// 3 ===================================================================

// function isEven (num) {
//     return num % 2 === 0;
// }
//
// console.log(isEven(4));
// console.log(isEven(13));
// console.log(isEven(5));
// console.log(isEven(34));

// 4 ====================================================================

// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// let arrEven = [];
//
// function isEven (num) {
//     return num % 2 === 0;
// }
//     for (let i = 0; i <= arr.length; i++) {
//         if (isEven(i)) {
//             arrEven.push(i);
//         }
//
// }
// console.log(arrEven);

// 5 =====================================================================

// function degree(num, numDegree) {
//     return num ** numDegree;
// }
//
// console.log(degree(3,6));
// console.log(degree(10,2));

// 6 ====================================================================

// function person(age) {
//     age = 2022 - age;
//     return age > 16 ? "Добро пожаловать" :
//     "Вы еще молоды";
// }
// console.log(person(1996));
// console.log(person(2012));

// 7 ===================================================================

// function person(age) {
//     console.log(age);
//     if (age) {
//         age = 2022 - age;
//        if (age >= 16) {
//            return "Добро пожаловать"
//        } else {
//            return "Вы еще молоды"
//        }
//     } else {
//         return "Введите возраст"
//     }
// }
// console.log(person(1996));
// console.log(person(2012));
// console.log(person());
// console.log(person(2015 && 2010));
// console.log(person(1996 || 2010));
// console.log(person(undefined));

// 8 ====================================================================

// let str = "здоров був гімно свинособаче";
// let strOne = [];
//
// function ucFirst(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     strOne.push(ucFirst(arr[i]));
// }
//
// let strTwo = strOne.join(" ");
//
// console.log(strOne);
// console.log(strTwo);

// 9 ====================================================================

// let str = "var_text_hello.";
// let strOne = [];
//
// function ucFirst(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// let arr = str.split('_');
// for (let i = 0; i < arr.length; i++) {
//     strOne.push(ucFirst(arr[i]));
// }
//
// let strTwo = strOne.join("");
//
// console.log(strOne);
// console.log(strTwo);

// 10 ==================================================================

// let arr = [45, 567, 23, 1, 6, "hello", "ass", 7];
//
// function inArray(el, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === el) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(inArray("hello", arr));
// console.log(inArray(23, arr));
// console.log(inArray(2, arr));