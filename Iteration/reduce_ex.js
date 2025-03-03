// reduce ex array into object 


const shoopingCard =[
     {
          itemName : "shoes",
          price : 2000
     },
     {
          itemName : "bag",
          price : 200
     },
     {
          itemName : "crop-top",
          price : 500
     },
     {
          itemName : "gens",
          price : 2000
     },
]
const aftershope= shoopingCard.reduce( (acc,item) => acc + item.price, 0)

console.log(aftershope);