//for loop

for (let i = 1; i <= 10; i++) {               // ctrl + d == duplicate
     const element = i;
     if(element == 5){
         // console.log("5 is best number");
          
     }
    // console.log(element);
     
}


for (let i = 1; i <= 10; i++) {
     //console.log(`outer loop ${i}`);
     
     for (let j = 1; j <=10; j++) {
         //console.log(`inner loop ${j}`);
         //console.log(i + '*' + j+ '=' + i *j);
         
         }
    }

    let myarr =["avb", "rty", "yjg", "drg"]
   // console.log(myarr.length);
    
    for (let index = 0; index < myarr.length; index++) {
     const element = myarr[index];
     //console.log(element);
}

//break

for (let index = 0; index <=5; index++) {
     if(index == 5){
          console.log(`dected 5`);
          break
          
     }
     console.log(`value of i is ${index}`);
     
     
}

// continue
for (let index = 0; index <=5; index++) {
     if(index == 5){
          console.log(`dected 5`);
          continue
          
     }
     console.log(`value of i is ${index}`);
     
     
}

