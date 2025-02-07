function sayMyName()
{
     console.log("h");
     console.log("i");
     console.log("l");
     console.log("j");
}
//sayMyName()


// add 2 no,

function add2no(num1, num2){        // in js no need to declare an string ////  parameter
    let result = num1 + num2
    return result 
    //console.log(num1 + num2);         // it only one time return val
}
//add2no(3,"4")                         // pass the arguments
//add2no(3, 4)
//add2no("4",3)
//add2no(3, null)


const result = add2no(3,4)
console.log("Result", result);
