// scops are let, const, var keywords



if(true){
     let a = 10
     const b = 20
     var c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);


//nested scope

function one(){
     const username="shruti"

      function two(){
          const address="pandharpur"
          console.log(username);
      
          
      }
      //console.log(address);                      // line by line exection
      two()
      
}
//one()

//-----------------------------------------------------------------------------------------




if(true){
     const username =" shruti"
     if(username===" shruti"){
          const adress=" ---- pandharpur"
          //console.log(username+adress);
          
     }
}



//-------------------------------------imp--------------------------------------------------------

function add1(num){                             // thses 2 methods is used to function declaration
     return num +1

}
console.log(add1(5))



const add2 = function(num){
     return num+2
}
add2(5)









