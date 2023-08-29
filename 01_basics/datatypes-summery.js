/********* Memory ********/

let myYotubename = "FixQuestions"

let anothername = myYotubename
anothername = "Shubham"

// console.log(myYotubename);
// console.log(anothername);   // value types 

let userOne = {
    email: "Shubham@gmail.com",
    upi: "8669029756@apl"
}

let userTwo = userOne

userTwo.email = "shubham1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);