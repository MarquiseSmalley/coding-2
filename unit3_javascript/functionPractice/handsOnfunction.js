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




