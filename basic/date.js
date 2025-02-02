let myDate = new Date()
//console.log( myDate.toString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toTimeString());
//console.log(typeof myDate);   // oject 


let myBDate = new Date(2024 , 2, 23)
console.log(myBDate.toDateString());
console.log(myBDate.toLocaleString());


let myTimeStamp = Date.now()   //hotel mangement
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // decimal


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// customize
newDate.toLocaleString('default' , {      
     weekday : "long"                      // ctrl+space come properties
})

