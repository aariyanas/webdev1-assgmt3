/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let calculatedCost = document.getElementById("calculated-cost");
let numDaysSel = 0;
let monButton = document.getElementById("monday");
let tueButton = document.getElementById("tuesday");
let wedButton = document.getElementById("wednesday");
let thuButton = document.getElementById("thursday");
let friButton = document.getElementById("friday");
let clearButton = document.getElementById("clear-button");
let fullButton = document.getElementById("full");
let halfButton= document.getElementById("half");
let daysOfWeek = [monButton, tueButton, wedButton, thuButton, friButton];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeDayColour(selection){
    let day = selection.target;
    if (!day.classList.contains("clicked")){
        numDaysSel++;
    }
    if (day.id === "monday"){
        monButton.classList.add("clicked");
    } else if (day.id === "tuesday"){
        tueButton.classList.add("clicked");
    } else if (day.id === "wednesday"){
        wedButton.classList.add("clicked");
    } else if (day.id === "thursday"){
        thuButton.classList.add("clicked");
    } else if (day.id === "friday"){
        friButton.classList.add("clicked");
    }
    calculate();
}

monButton.addEventListener("click", changeDayColour);
tueButton.addEventListener("click", changeDayColour);
wedButton.addEventListener("click", changeDayColour);
thuButton.addEventListener("click", changeDayColour);
friButton.addEventListener("click", changeDayColour);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays(){
    daysOfWeek.forEach(day => {
        day.classList.remove("clicked");
    });
    numDaysSel = 0;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculatedCost.innerHTML = 0;
}

clearButton.addEventListener("click", clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRate(selection){
    let duration = selection.target;
    if (duration.id === "half"){
        dailyRate = 20;
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
    } else if (duration.id === "full"){
        dailyRate = 35;
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
    }
    calculate();
}

halfButton.addEventListener("click", changeRate);
fullButton.addEventListener("click", changeRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    calculatedCost.innerHTML = numDaysSel * dailyRate;
}
