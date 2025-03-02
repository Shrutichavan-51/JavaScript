// acc = accumulator , curr_val = current value
const arr = [1,2,3,4,5]

const newname = arr.reduce(function (acc, curr_val) {
     console.log(`acc ${acc} and curr_val ${curr_val}`);
     
     return acc + curr_val
}, 0)
//console.log(newname);

/*output : PS D:\js-prcticle\Javascript\Iteration> node reduce.js
acc 0 and curr_val 1
acc 1 and curr_val 2
acc 3 and curr_val 3
acc 6 and curr_val 4
acc 10 and curr_val 5
15 */

// ----using arrow function
const newname1 = arr.reduce( (acc, curr_val) => acc + curr_val,0 )
console.log(newname1);
