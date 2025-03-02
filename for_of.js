// -----------------for -of    loop --------------------

// ["", ""," "]
// [{}, {}, {}]

const arr =[1,2,3,4,5]
for (const val of arr) {
     //console.log(val);
}

const greeting = "helloo heyy"
for (const greet of greeting) {
     //console.log(`each char is ${greet}`);
}


// map       - store an unique value

const map = new Map()
map.set('india', "In")
map.set("USA", "amirika")
map.set("france" , " fr")

//console.log(map);

for (const [key, value] of map) {
     //console.log(key ,":" , value);
     
}
// ------------for in loop---------------
const myobj ={
     gm : "nfs",
     gm1 : "rt",
     gm2 : "jkfgj",
     gm3 : " rg"
}
for (const key in myobj) {
    // console.log(myobj[key]);
    //console.log(`${key} short as an ${myobj[key]}`);
    
}

//--------for in loop using array---------
const prm = ["java", "cpp", "js"]

for (const key in prm) {
     //console.log(prm[key]);
     console.log(key);
     
     
}



//object = for_in loop
// array = for_of loop