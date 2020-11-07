const inputElement = document.querySelector("input");
const submitButtom = document.querySelector(".submit");
// const containerElement = document.querySelector(".container");


submitButtom.addEventListener("click", () => {
    const inputTypeToSet = inputElement.type === 'text' ? "password" : "text";
    inputElement.setAttribute("type", inputTypeToSet);
});

// submitButtom.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert("YOOO, You click the buttom!")
// });



