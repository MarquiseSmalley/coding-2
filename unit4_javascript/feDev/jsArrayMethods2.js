// A JS Array is a collection data type, 
// for storing different types of data.

// Example:
classes = ["math",
    "reading",
    "gym",
    10,
    10.23,
    true,
    "reading",
];

var shirts= ['s','m','l']
var shoe= ['nike','adidas']

// Methods = A special type of funtion that works
// on lists and objects.

// push() method - a special function that allow us to 
// add an item to a list. the new piece of data will always
// go to the back / end of the list.

// LIFO (Last In, First Out)
var bookBag =[ 'pencils', 'pens', 'notebooks', 'fiction book']
bookBag.push('sketch book')
console.log(bookBag)

// pop() method - a special function that allows us to 
// remove an item from a list. The most recent item, usually
// at the end of the list, will be removed.
// the pop method DOES NOT need an argument - it will always
// remove the last item.
bookBag.pop()
console.log(bookBag)

// length function - a special function that counts the
// number of items inside of a list.

console.log(bookBag.length)



function amazonCart(){
    itemsInCart = ["pencils", "pens", 
        "notebooks", "fiction book"]
    
}

function addAmazonCart(item){
    itemsInCart.pop(item);
    console.log(itemsInCart)

}

function removeAmazonCart(item){
    itemsInCart.pop(item);
    console.log(itemsInCart)

}
addAmazonCart('sneakers')
// can you find a method to remove specific items
// from the list.

amazonCart(['pen','pencil','notebook'])