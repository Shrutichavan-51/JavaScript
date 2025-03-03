const num = [1,2,3,4,5,6,7,8,9,10]
const newnums = num.filter( (num) => num > 4)
//console.log(newnums);

//----using another method
// when using scope{} then type  " return ""
const num1 = [1,2,3,4,5,6,7,8,9,10]
const newnums1 = num1.filter( (num1) => {

     return num1 > 4
})
console.log(newnums1);