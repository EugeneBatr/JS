// const numbers = [1, 2, 3, 4, 5, 6, 7];
const some = [1, 2, 6, 'hello', null];

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

// const someValue = (arr) => {
//         if (!Array.isArray(arr)) return;
//         return arr.filter((number) = number % 2 === 0); 
// };
// console.log(someValue(numbers));




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

// const words = ['Hello', 'kek', 'aws', 'world', 'I love JavaScript'];
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


//TODO 5

// const find = (arr) => {
//         if (!Array.isArray(arr)) return;
//         const filterArray = arr.filter((item) => {
//                 return typeof item === 'string' || typeof item === 'number'
//         });
//         const result = filterArray.map((item) => {
//                 if (typeof item === 'string') {
//                         return item.toUpperCase()
//                 }

//                 return (item * 2).toString();
//         })

//         console.log(result)
//         return result;
// };

// find([1, 2, 'Hello', null, undefined, 4])


//TODO 6

// const find = (arr, someValue) => {
//         if (!Array.isArray(arr) || typeof someValue === 'string') return;
//         const findName = arr.find((item) => {
//                 if (item === someValue) {
//                         return 
//                 }
//         })
//         console.log(findName);
//         return findName
// }

// find(['Alex', 'Maria', 'Max', 'Petr'], 'Maria')

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// const users = ['Alex', 'Oleg', 'Dmitriy', 'Maria', 'Olga'];

// const userGenerator = (arr) => {
//         if (!Array.isArray) return;
//         return arr.map((userName, index) => {
//                 return {
//                         name: userName,
//                         id: index
//                 }
//         })
// }
// console.log(userGenerator(users));

///////////////////////////////////////////////////////////

// const users = [
//         {
//                 name: 'Oleg',
//                 age: 25
//         },
//         {
//                 name: 'Max',
//                 age: 17
//         },
//         {
//                 name: 'Petr',
//                 age: 22
//         },
//         {
//                 name: 'Michail',
//                 age: 33
//         },
//         {
//                 name: 'Marina',
//                 age: 65
//         },
// ];

// const filterUsersByAge = (arr) => {
//         if (!Array.isArray) return;
//         return arr.filter((user) => user.age >= 22)
// }
// console.log(filterUsersByAge(users));

/////////////////////////////////////////////////

// const brands = ['Nike', 'Adiddas', 'Guccy', 'Reserved']

// const generateCard = (vendorsArray) => {
//         if (!Array.isArray(vendorsArray)) return;
//         return vendorsArray.reduce((result, vendorName, index) => {
//                 if (!result.hasOwnProperty(vendorName)) {
//                         result[vendorName] = index;
//                         return result;
//                 }
//         }, {}

//         )
// }
// console.log(generateCard(brands));

// const generateBrands = (vendors) => {
//         if (!Array.isArray(vendors)) return;
//         const result = {};
//         vendors.array.forEach(vendorName, index => {
//                 if (!result.hasOwnProperty(vendorName)) {
//                         result[vendorName] = index
//                 }
//         });
//         return result
// }
// console.log(generateBrands(brands));

////////////////////////////////////////////////////

// const numbers = [10, 2, 4, 6, 21, 65, 333]

// const sorter = (numbersArray) => {
//         return numbersArray.sort((prev, next) => {
//                 return prev > next ? 1 : -1
//         })
// }
// console.log(sorter(numbers));

///////////////////////////////////////////////////////

const users = [
        {
                id: 1,
                first_name: 'Jeanette',
                last_name: 'Penddreth',
                email: 'jpenddreth0@census.gov',
                gender: 'Female',
                ip_address: '26.58.193.2',
        },
        {
                id: 2,
                first_name: 'Petr',
                last_name: 'Jackson',
                email: 'gfrediani1@senate.gov',
                gender: 'Male',
                ip_address: '229.179.4.212',
        },
];

const sorter = (userArray) => {
        if (!Array.isArray(userArray)) return;
        return userArray.reduce(
                (result, user) => {
                        const userToInsert = {
                                id: user.id,
                                fullName: `${user.first_name} ${user.last_name}`,
                                email: user.email,
                                gender: user.gender,
                                ip_address: user.ip_address,
                        };
                        if (userToInsert.gender.toLowerCase() === 'male') {
                                result.men.push(userToInsert);
                        } else {
                                result.women.push(userToInsert);
                        }
                        return result;
                },
                { men: [], women: [] }
        );


};
console.log(sorter(users));




// const initialData = [
//         {
//                 username: 'Maria',
//                 age: 25,
//         },
//         {
//                 username: 'Alex',
//                 age: 21,
//         },
//         {
//                 username: 'Oleg',
//                 age: 14,
//         },
//         {
//                 username: 'Dmitriy',
//                 age: 35,
//         },
//         {
//                 username: 'Oksana',
//                 age: 72,
//         },
// ];



// const filterUsersByAge = (arr) => {
//         if (!Array.isArray) return;
//         return arr.filter((user) => user.age >= 21);

// }
// console.log(filterUsersByAge(initialData));

