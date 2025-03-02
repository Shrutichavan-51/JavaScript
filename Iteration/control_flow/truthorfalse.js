const usermail =[]

if(usermail){
     console.log('got usermail');
     
}else{
     console.log('dont have user enail');
     
}


// values describtion

//falsy Value =    0, -0, BigInt 0n, ""(empty string), undefined, null, NAN 
// truthy value = [](empty array), "0"(inside string value is truthy value), 'false', " ", {}(empty object), function(){}

if(usermail.length=== 0){                         // when arrays comes empty then check thses way
     console.log("array is empty");
     
}


const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
     console.log("object is empty");
     
}

//nullish coalescing operator(??)   - used for understending database accsessing value

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = null ?? 9 ?? 20 
console.log(val1);
console.log(val2);
console.log(val3);             // fisrt come it excute first vale

// ternary operator
// syantx 
//    condition ? true : false

const test = 100
test <=80 ? console.log('pass')  : console.log("fail")



