// connction to db 


const books = [
     {
          title : '1' , genre :'fiction' , publish : 1945,
          edition : 2004
     },

     {
          title : '2' , genre : 'non- fiction' , publish : 1940,
          edition : 2004
     },
     {
          title : '3' , genre :'History' , publish : 2000,
          edition : 2004
     },

     {
          title : '4' , genre :'Science' , publish : 2009,
          edition : 2012
     },

     {
          title : '5' , genre :'math' , publish : 1947,
          edition : 2005
     },

     {
          title : '6' , genre :'Math' , publish : 1945,
          edition : 2020
     },

     {
          title : '7' , genre :'fiction1' , publish : 1995,
          edition : 2004
     },
];

let userBooks = books.filter( (bk) => bk.genre === 'Science' )

//userBooks = books.filter( (bk) => { return bk.edition >= 2004})

userBooks = books.filter( (bk) => {
     return bk.publish >= 1990  && bk.genre === 'math'

})
console.log(userBooks);
