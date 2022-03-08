// document.getElementById("count").innerText = 5

/************Basic mathematical operations*************/

// ctrl+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count);

// 1. Create two variables, myAge and humanDogRatio.
// 2. Multiply the two together and store the result in myDogRatio.
// 3. Log myDogAge to the console.
// let myAge = 21
// let humanDogratio = 7
// let myDogRatio = myAge * humanDogratio
// console.log(myDogRatio);

/************Reassigning and incrementing*************/

// let count = 5
// count += 1
// count = 3
// count = 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70.
// // console.log the value after each Step.
// let bonusPoints = 50
// console.log(bonusPoints);
// bonusPoints += 50
// console.log(bonusPoints);
// bonusPoints -= 75
// console.log(bonusPoints);
// bonusPoints += 45
// console.log(bonusPoints);

/************The onclick event listener*************/

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clikced");

// }

/************Using functions to write less code*************/

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

//  Setting up the race \ō͡≡o˞̶  \ō͡≡o˞̶  \ō͡≡o˞̶

// countdown()

//  Go!
//  Players are running the race \ō͡≡o˞̶ \ō͡≡o˞̶
//  Race is finished!
//  get ready for a new race \ō͡≡o˞̶ \ō͡≡o˞̶ \ō͡≡o˞̶

// countdown()

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);

// Create a function (you decide the name) that logs out the numer 42 to the console.
// Call/invoke the function.
// function myFirstFunction() {
//     console.log(42)
// }
// myFirstFunction()

/************Write a function that logs the sum*************/

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// // Create a function that logs out the sum of all the lap times.
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// // console.log(totalTime); = ReferenceError: totalTime is not defined
// logLapTime()

/************Write a function that increments*************/

// let lapsCompleted = 0
// // Create a function that increments the lapsCompleted variable with one.
// // Run it three times.
// function incrementLap() {
//     lapsCompleted += 1
// }
// incrementLap()
// console.log(lapsCompleted);
// incrementLap()
// console.log(lapsCompleted);
// incrementLap()
// console.log(lapsCompleted);

/************increment on clicks*************/

// // document.getElementById("count").innerText = 5
// // let count = 5
// // count += 1
// // console.log(count)
// // initialize the count as 0.
// // listen for clicks on the increment button.
// // increment the count variable when the button is clicked (log it out).
// // change the countt-el in the HTML to reflect the new count.
// let count = 0
// function increment() {
//     count += 1
//     console.log(count);
// }
/*satir 128 de function'i tekrar olusturunca satir 46'daki functionin okunmamasinin nedeni nedir?*/

/************Display the count*************/

// // document.getElementById("count").innerText = 5

// // change the countt-el in the HTML to reflect the new count.

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

/************the document object model(DOM)*************/

/************create the save button*************/

// // 1. Create a function, save(), which logs out the count when it's called

// function save() {
//     console.log(count);
// }

/************Write your first string variable*************/

let userName = 'per'

// // Create a variable, message, that stores the string: "You have tree new notifications.".

let message = "You have three new notifications"


/***************************************************************************************************/

// // Create a variable, messageToUser, that contains the message we have logged.

// let messageToUser = message + ", " + userName + "!";

// console.log(messageToUser);

/************Log a greeting to the console*************/

// // Create two variables, name and greeting. The name variable should store your name,
// // and the greeting should store e.g. "Hi, my name is ".
// // Create a third variable, myGreeting, that contatenates the two strings.
// // Log myGreeting to the console.

// let myName = "Raif."
// let greeting = "Hi, my name is "
// let myGreeting = greeting + myName
// console.log(myGreeting);

/************String vs. Numbers*************/
// // String always win.

// let myName = Raif YILMAZ
// let greeting = "Hi, my name is "
// let myGreeting = greeting + myName
// console.log(myGreeting);

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints 
// console.log(totalPoints);

// console.log(4 + 5); // 9
// console.log("2" + "4"); // "24"
// console.log("5" + 1); // "51"
// console.log(100 + "100"); // "100100"

/************Render a welcome message*************/

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let myName = "Raif Yilmaz"
let greeting = "Welcome back"

// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = greeting + " " + myName

/************Improve the message with string concatetion*************/

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋" 

/************Create the save feature*************/

// 1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")
let peopleSum = 0

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - ".
    console.log(count);
    let totalResult = peopleSum + count
    let countStr = count + " - ";
    //console.log(countStr);
    // 3. Render the variable in the saveEl using innerText.
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph.    
    sumEl.textContent = "Total in store: " + totalResult
    countEl.textContent = 0
    count = 0
}
// toplamlarini gosteremiyorum.

/************Debugging online*************/

// Go to Google
// and wirte "innerText alternatives mdn"


/************Set the count to 0*************/

// line 240 and 241

/************Congrats & Recap*************/
//  we learned;
//     1. script tag
//     2. variables
//     3. numbers
//     4. strings
//     5. console.log();
//     6. functions
//     7. the DOM
//     8. getElementById()
//     9. innerText
//     10.textContent
    
