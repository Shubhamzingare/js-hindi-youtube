const accountId =  12133
let accountEmail = "shubham@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId = 2  //  not allowed to assign
 accountEmail = "Shubham123@gmail.com"
 accountPassword = "24154"
 accountCity = "Mumbai"

 /* 
prefer not to use var keyword
beacsue of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState]);

