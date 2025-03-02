//life  - Immediately Invoked Function Exception

// function one(){

//     console.log("DB connected");
     
// }
// one()

//life  - Immediately Invoked Function Exception

(function one(){                                   // thses is called named life

    console.log("DB connected");
     
}) ();
//one()

// (function code()
// {
//     console.log('db connected part 2');
    
// }
// )()

( (address) => {                                                   // thses is un-named life
    console.log(` DB connected ${address}`);                //  we can use both the types of declering the life
    
})('pandharpur')