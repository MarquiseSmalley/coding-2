// 1. Create a function that will determine if a number passed into it's funtion parameters is either positive or negative. 
// For example, If I pass in the number 10 it should return the message,"this is a positive number", 
// or if I type in the number -12, it should return the message, "this is a negative number. 
// If the user types in zero, it should return the message; "this is zero".

function NumberLabeler (number) {
    if (number == -1) {

      console.log("this is a negative number.");

    } else if (number == 1) {

      console.log("this is a positive number.");

    } else if (number == 0){

      console.log('this is zero.')
  
    }
  }
  

// 2. You have been hired by netflix to help them develop a movie ticket program. 
//  You must create a function that will check the movie goers age and return the price of the movie ticket based on that person's age. 
// Provided are the lists of age and the prices:

// 10 and under should pay $5.00
// 16 and up should pay $10.00
// 20 and up should pay $15.00
// 65 and up should pay $5.00

function TicketAge (age) {
    if (age < 10) {
      console.log("You are 10 or under the age of 10, therefore your ticket price is $5.00.");
    } 
    else if (age > 10 && age < 16) {
      console.log("You are between the ages of 11 - 16, therefore your ticket price is $10.00.");
    } 
    else if (age > 16 && age < 20) {
      console.log("You are between the ages of 17 - 20, therefore your ticket price is $15.00.")
    } 
    else if (age > 20 && age < 65)
      console.log ("You are 65 or between the ages of 21 - 65, therefore your ticket price is $5.00.")
  
    }

    TicketAge(49)



// 3. You have been hired by target to assist them with their store member discount software. 
// They would like to make it so that shoppers who have a specific membership tier can save a certain amount of money on the products they buy.
// Provided below are the memberships and the discount amount they should recieve:
// superShopper should recieve a 10% discount on their items
// megaShopper should recieve a 15% discount on their items
// ultraShopper should receive a 20% discount on their items

// Your program should be able to take in the shoppers membership type, 
// the name of the item they are purchasing, and the item price, 
// and should return a message telling the user 
// what the final price of the item is and how much they saved.

// For example: congratulations superShopper, you saved $10.00 on this TV. Your final item price is $90.00.

function MembershipDiscount (Discount) {
  if (membership == superShopper) {
    console.log("congratulations superShopper, you saved $10.00 on this TV. Your final item price is $90.00.");
  } 
  else if (membership == megaShopper) {
    console.log("congratulations megaShopper, you saved $15.00 on this TV. Your final item price is 85.00.");
  } 
  else if (membership == ultraShopper) {
    console.log("congratulations ultraShopper, you saved $20.00 on this TV. Your final item price is $80.00.");
  } 

  }

  MembershipDiscount(ultraShopper)

  // # KEY POINTS
  // # Determine the price of the item baseed on the user's membership.
  // # - superShopper should recieve a 10% discount on their items
  // # - megaShopper should recieve a 15% discount on their items
  // # - ultraShopper should receive a 20% discount on their items
  // # we need an item name, item price, membership, and message.

  function discountFunction(membership, itemPrice) {
    console.log("Testing. Function works.");
    if(membership === "superShopper") {
      console.log("you are a super shopper, here is a 10% discount on your item.");
      var discountAmount = itemPrice * 0.1
      console.log(discountAmmount);
      var total = itemPrice - discountAmmount;
      console.log(total);

    } else if(membership === "megaShopper") {
        console.log("you are a mega shopper, here is a 15% discount on your item.");
        var discountAmount = itemPrice * 0.15;
        console.log(discountAmmount);
        var total = itemPrice - discountAmmount;
        console.log(total);
  
    } else if(membership === "ultraShopper") {
        console.log("you are an ultra shopper, here is a 20% discount on your item.");
        var discountAmount = itemPrice * 0.20
        console.log(discountAmmount);
        var total = itemPrice - discountAmmount;
        console.log(total);
  
      } else {
      console.log("Error, sorry this membership doesnt exist.");
     }
    

discountFunction ('superShopper', 100);