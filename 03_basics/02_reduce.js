const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`acc: ${acc} and currValue: ${currVal}`);
//     return acc + currVal;
// },3);

// console.log(myTotal);

const myTotal = myNums.reduce( (acc,curVal) =>
{
    return acc + curVal;
},0)

console.log(myTotal);