const user ={
     username : "sefret",
     price : 888,

     welcomeMessage : function(){
          console.log(`${this.username}, welcome tu website`);                ///ccurrent comtext
          console.log(this);
          
          
     }
}
// user.welcomeMessage()
// user.username="shama"
// user.welcomeMessage()

//console.log(this);



//==========================================================================================================================================

// function one(){
//      let username="shruti"
//      console.log(this.username);
     
// }
// one()


//----------------------------------------------------------------------------------------------------------------------------------------

// arrow fun


// // const one = function(){
// //      let username = "asnffsef"
// //      console.log(this.username);
     

// }

const one =() => {
     let username ="djfgd"
     console.log(this);
     
}
one()


//================
//implicet

//const add2 =(num1, num2) => num1+ num2

//const add2 =(num1, num2) =>(( num1+ num2)


//const myarr=[3,54,,33,4]
//myarr.forEach(()=>)







