let countEl = document.getElementById("count-el") // pass in arguement
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")
// let peopleSum = 0
let totalResult = 0;
let countStr = "";

function save() {
    console.log(count);
    totalResult += count;
    countStr = count + " | ";
    saveEl.textContent += countStr
    sumEl.textContent = "Total in store: " + totalResult
    countEl.textContent = 0
    count = 0
}
