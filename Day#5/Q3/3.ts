let x = [ "Tommy shelby" , "Mark Zukerberg" , "Mukesh Ambani" , "Bill Gates"]
let y = "Mr."
let z = "Sir i would like to invite you to dinner!"

x.forEach(t => console.log(y , t , z))

let unable_to_attend = "Tommy shelby"
console.log(unable_to_attend ,"Sir can't make it to the dinner" )

let new_guest = "Eren Yeager" 
x[x.indexOf(unable_to_attend)] = new_guest

console.log("--------------------------------------------------")

x.forEach(t => console.log(y , t , z))


