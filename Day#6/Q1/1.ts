//  More Guests

let x = [ "Tommy shelby" , "Mark Zukerberg" , "Mukesh Ambani" , "Bill Gates"]
let y = "Mr."
let z = "Sir i would like to invite you to dinner!"

console.log("Good news!! i have found a bigger table")

x.unshift("Satoshi Nakamoto"); // places the name in front of the array
x.splice(x.length / 2 , 0 ,  "Aman Gupta")  //places the name in middle of the array 
x.push("Gotham Adani") // places the name at the end of array

x.forEach(result => console.log(y ,result, z))
