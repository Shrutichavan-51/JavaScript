function login(username){
     if(username===undefined){                                // if(!undefined)
          console.log("enter a username");
          return
          
     }
     return`${username} just login`     // string interpolation
}
//console.log(login("shruti"));
// console.log(login(""));
console.log(login());           // undefined

