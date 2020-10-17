const numbers = [1, 2, 35, 64, 58, 60, 7];
const user = (arr) => {
        if (!Array.isArray(arr)) return;
        return arr.map((number) => {
                return `User ${number}`;
        });
}
console.log(user(numbers));
