//----------------for_each--------------------
// ----using function
const code = ["js", "python", "java" ,"cpp"]
code.forEach( function (key) {
    // console.log(key);
     
})

//----using arrow function
code.forEach( (key) => {
     //console.log(key);
     
})

//-----

function printMe(key){
     //console.log(key);
     
}
code.forEach(printMe)              // take an refernce

//=-----
code.forEach( (key, index ,arr) => {
    // console.log(key, index,  arr);
     
})



// // [{}, {}, {}]
// array mhade object ch value kadhani

const codes =[
     {
          langName : "js",
          fileName : "javascript"
     },
     {
          langName : "py",
          fileName : "Python"
     },
     {
          langName : "java",
          fileName : "jdk"
     },
]

codes.forEach( (item) => {
    // console.log(item.fileName);
     console.log(item.langName);
     
     
})

// for_each loop it doenst return any value
