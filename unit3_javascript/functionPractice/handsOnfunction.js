// Discuss the anatomy of a function



// ()= Curly brackets are called parameters.
// This is the designated area for where we
// pass in data into the function definition

// data = data types 

function profileBio(name, income, debt){
    console.log ('username: ' + name);
    console.log ("my income is: " + income);
    let totalValue = income - debt;
    console.log ('my networth is : ' + totalValue);
}
profileBio('Marquise', 800000, 600)

// Lesson on Conditional Statements
// Conditional statemebts are comprised of the 
// 'IF' and 'ELSE' keywords. They allow us to 
// make decisions in our functions based on the 
// data we recieve.

function checkTVInventory(tvs) {
    if(tvs > 0){
        console.log("TV is in stock!");
    } else {
        console.log("Sorry, out of stock.");
    }
}


checkTVInventory(30)

// Activity 

// 1. Create a function that will take a number that 
// is passed into the functions parameters and convert 
// the number into minutes. For example, a value of 2 
// should return 120 minutes. a value of 3 should 
// return 180 minutes, etc.

function hoursToMinutes(hour){
    if (hour == 12 ){
      console.log("You will get normal pay for the day.");
    } else if (hour > 8) {
      console.log("You qualify for overtime.");
    } else if (hour > 16) {
      console.log("You're working way too hard.");
    } else if (hour >= 24)
    }



doctorPay(25);



function discount(itemPrice){
    console.log('you qualify for 5% discount')
}
else if(itemPrice)
}
// 