const accID = 1242
let accMail = "abc@gamail.com"
var accPass = 123
accCity = "pandharpur"  // we can resever a memeory not creating or declaring the any variable 
let accState;   // it is undefined cause of not put an value


// accID = 2
/* { }  - thes is called scope 
it has no used scope values  thats why it used by "let and var"
*/
accMail = "xyc@mail"
accPass = "345"
accCity = "pune"
//console.log(accID);
//console.log(accMail);

/* preper not to use "var"
cause of issue in block scope nd functional scope
*/
console.table([accID, accMail, accPass, accCity, accState])


