//number inputs
const numberInputs = Array.from(document.querySelectorAll(".form__input"));
const inputFirst = document.querySelector("#products");
    const inputFirstPrice = document.querySelector("[data-id = products] .item__price")
    const inputFirstCalc = document.querySelector("[data-id = products] .item__calc")
const inputSecond = document.querySelector("#orders");
    const inputSecondPrice = document.querySelector("[data-id = orders] .item__price")
    const inputSecondCalc = document.querySelector("[data-id = orders] .item__calc")

//dropdown list
const dropdownList = document.querySelector(".calc__select");
const dropdownInput = document.querySelector(".select__input");
const dropdownOptions = document.querySelector(".select__dropdown").children;

const optionFirst = dropdownOptions[0];
const optionSecond = dropdownOptions[1];
const optionThird = dropdownOptions[2];

//checkbox
const checboxes = document.querySelectorAll(".form__checkbox input");
const checkbox1 = document.querySelector("#accounting");
const checkbox2 = document.querySelector("#terminal")

//summary (second container)
const listSummary = Array.from(document.querySelectorAll(".list__item")); //list of selected options in summary (0-4)
const listTotal = document.querySelector(".summary__total");

const price1 = 2;
const price2 = 0.25;
const price31 = 0;
const price32 = 25;
const price33 = 60;
const price4 = 5;
const price5 = 20;

let sum = 0;
const totalPrice = document.querySelector(".total__price");


/* ---------------------------------- opening summary (second container) ---------------------------------- */

//number inputs event listners
numberInputs.forEach(function (elem, index) {
    elem.addEventListener("keyup", function () {
        listTotal.classList.add("open");
        if(numberInputs[index] === numberInputs[0]) {
            if(numberInputs[0].value > 0) {
                listSummary[0].classList.add("open");
            } else {
                listSummary[0].classList.remove("open");
                //listTotal.classList.remove("open");
            }
        } else if(numberInputs[index] === numberInputs[1]) {
            if(numberInputs[1].value > 0) {
                listSummary[1].classList.add("open");
            } else {
                listSummary[1].classList.remove("open");
                //listTotal.classList.remove("open");
            }
        } else if (numberInputs[index].value === "") {
            listTotal.classList.remove("open");
        }
    });
});

// dropdown event listners
dropdownList.addEventListener("click", function () {
    this.classList.toggle("open");
});

Array.from(dropdownOptions).forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        listTotal.classList.add("open");
        listSummary[2].classList.add("open");
        if(dropdownOptions[index] === dropdownOptions[0]) {
            dropdownInput.innerText = dropdownOptions[0].innerText;
            listSummary[2].children[1] = dropdownOptions[0].innerText
        } else if(dropdownOptions[index] === dropdownOptions[1]) {
            dropdownInput.innerText = dropdownOptions[1].innerText;
        } else {
            dropdownInput.innerText = dropdownOptions[2].innerText;
        }
    });
});

//checkbox event listners
checboxes.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        if (elem.checked) {
            listTotal.classList.add("open");
        } else if (checboxes[0].checked === false && checboxes[1].checked === false) {
            listTotal.classList.remove("open");
        }
        if(checboxes[index] === checboxes[0]) {
            listSummary[3].classList.toggle("open");
        } else {
            listSummary[4].classList.toggle("open");
        }
    });
});

/* ---------------------------------------------- calc -------------------------------------------- */

inputFirst.addEventListener("keyup", function () {
    if(inputFirst.value > 0) {
        sum += (inputFirst.value * price1);
        inputFirstCalc.innerText = inputFirst.value + " x " + "$" + price1;
        inputFirstPrice.innerText = "$" + (inputFirst.value * price1);
        totalPrice.innerText = "$" + sum;
        return sum;
    } else {
        sum = 0;
        totalPrice.innerText = "$" + sum;
        return sum;
    }
});

inputSecond.addEventListener("keyup", function () {
    if(inputSecond.value > 0) {
        sum += (inputSecond.value * price2);
        inputSecondCalc.innerText = inputSecond.value + " x " + "$" + price2;
        inputSecondPrice.innerText = "$" + (inputSecond.value * price2);
        totalPrice.innerText = "$" + sum;
        return sum;
    } else {
        sum = 0;
        totalPrice.innerText = "$" + sum;
        return sum;
    }
});

// Array.from(dropdownOptions).forEach(function (elem, index) {
//     elem.addEventListener("click", function () {
//         if(elem[index] === optionFirst) {
//             listSummary[2].children[1].innerText = optionFirst.innerText;
//             listSummary[2].children[2].innerText = "$" + price31;
//             sum += 0;
//             totalPrice.innerText = "$" + sum;
//             return sum;
//         } else if (elem[index] === optionSecond) {
//             listSummary[2].children[1].innerText = optionSecond.innerText;
//             listSummary[2].children[2].innerText = "$" + price32;
//             sum += price32;
//             totalPrice.innerText = "$" + sum;
//             return sum;
//         } else if (elem[index] === optionThird) {
//             listSummary[2].children[1].innerText = optionThird.innerText;
//             listSummary[2].children[2].innerText = "$" + price33;
//             sum += price33;
//             totalPrice.innerText = "$" + sum;
//             return sum;
//         }
//     });
// });

optionFirst.addEventListener("click", function () {
    if (dropdownInput.innerText === "Basic") {
        listSummary[2].children[1].innerText = optionFirst.innerText;
        listSummary[2].children[2].innerText = "$" + price31;
        sum += 0;
        totalPrice.innerText = "$" + sum;
        return sum;
    }
});

optionSecond.addEventListener("click", function () {
    if (dropdownInput.innerText === "Professional") {
        listSummary[2].children[1].innerText = optionSecond.innerText;
        listSummary[2].children[2].innerText = "$" + price32;
        sum += price32;
        totalPrice.innerText = "$" + sum;
        return sum;
    }
});

optionThird.addEventListener("click", function () {
    if (dropdownInput.innerText === "Premium") {
        listSummary[2].children[1].innerText = optionThird.innerText;
        listSummary[2].children[2].innerText = "$" + price33;
        sum += price33;
        totalPrice.innerText = "$" + sum;
        return sum;
    }
});

checkbox1.addEventListener("change", function () {
    if (checkbox1.checked) {
        sum += price4;
    } else {
        sum -= price4;
    }
    totalPrice.innerText = "$" + sum;
    return sum;
});

checkbox2.addEventListener("change", function () {
    if (checkbox2.checked) {
        sum += price5;
    } else {
        sum -= price5;
    }
    totalPrice.innerText = "$" + sum;
    return sum;
});