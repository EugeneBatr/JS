const numbers = [1, 2, 3, 4, 5, 6, 7];

// const user = (arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.map((number, index, array) => {
//                 return index === array.length - 1
//                         ? `${index} User ${number * 2}`
//                         : `User ${number}`;

//         });

// }
// console.log(user(numbers));


// четная функция 

// const somevalue = (arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.filter((number) = number % 2 === 0); 
// };
// console.log(somevalue(numbers));




///////ДОМАШКА!!///////

//TODO 1

// const multi =(arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.map((number) => {
//                 return `${number * 3}`
//         });
// };
// console.log(multi(numbers))


//TODO 2

// const sqr = (arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.map((number, index, array) => {
//                 if (index === 0 || index === arr.length - 1) {
//                         return Math.pow(index, 2);
//                 }
//                 return `${number + 1}`

//         });
// };
// console.log(sqr(numbers))


//TODO 3

// const words = ['Hello', 'kek', 'aws', 'world', 'I love this fucking JavaScript'];
// const sqr = (arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.filter((string, index, array) => {
//                 if (string.length > 3) {
//                         return (`${string}`);
//                 }
//         });
// };
// console.log(sqr(words))


//TODO 4

// v1
// const sum = (arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.reduce((summ, current) =>
//                 summ + current,
//                 0);
// };
// console.log(sum(numbers));