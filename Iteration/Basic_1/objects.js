//object.create   = construtor method = singletone

// object literals
const mysym = Symbol("keystaff")
const user ={
         name : " shruti",
     [mysym] : "keystaff",           // [] thses is syntax of Symbol
     age : 23,
     adress : "ppur",
     mail: "asd@gmaail.com",
     isLoggedIn: false
     //lastLoginDay: ["monday", " starday"]     // object
 }

 console.log(user.adress)
 console.log(user["mail"])
 console.log(user[mysym])


 // how to access objects key values -> .objects
 //  how to change values

 user.mail= "gfdfi@gmail.com"          // value changes by . "user.mail"


 // keys, values, entries 

 // distructring

 const course ={ 
    coursename : "js",
    price : 100,
    teacher: "hitesh"
 }
 //course.teacher

 const {teacher} = course                  // const {teacher:name_teacher} = course (renaming)
 console.log(teacher);
 
 //const {teacher: name_teacher} = course                  // const {teacher:name_teacher} = course (renaming)
 //console.log(name_teacher);