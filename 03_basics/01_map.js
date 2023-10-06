
const MyMap = new Map();

MyMap.set("Name", "Shubham Zingare");
MyMap.set("City","Nagpur");
MyMap.set("Role","Tester");


for (const key in MyMap) {
    //console.log(key);    
}


const myNumbs = [1,2,3,4,5,6,7,8,9,10]

 const nums = myNumbs.filter( (num) => { return num >5 })

 //console.log(nums);

 myNumbs.forEach((n) => {
    //console.log(n);
 })

const newNumbers = myNumbs.map((num) => num*10)   // this is called chaining 
                          .map((num) => num+1)     // we can chain multiple function at a time 
                          .filter((num) => num>=41);

console.log(newNumbers);


