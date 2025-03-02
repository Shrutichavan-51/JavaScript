// array

const myArr = [1,2, 3,3,4];
//console.log(myArr[1]);              // we cant acces as string   ex. myarr("pqr");

//const myheros = new Array(1,2 , 3, 4)
//console.log(myheros[1]);


// array methods

/*myArr.push(6);
myArr.pop();
console.log(myArr);
*/

//myArr.unshift(9)
//myArr.shift()


console.log(myArr.includes(3))
console.log(myArr.indexOf(4))

//slice, splice
console.log("A", myArr);
const mynew= myArr.slice(1,3)
console.log(mynew);

console.log("B", myArr);
const mynew2= myArr.splice(1,3)
console.log(mynew2);