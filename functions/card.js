function CardPrice(val1, val2,...num1){                                // ... its called rest opertator or spread opertor
    // function CardPrice(...num1){                                     // print array value
     return num1
}
//console.log(CardPrice(200,300,400));
const user={
     username: "Shruti",
     price :100
}
function handleObj(anyObj){
     console.log(`username is ${ anyObj.username} and price is ${anyObj.price}`);
    
}
handleObj(user)
