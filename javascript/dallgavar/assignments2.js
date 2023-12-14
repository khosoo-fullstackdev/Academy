const shoppingCartItems = [
    { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
    { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
    { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
    { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
    { name: "Book", price: 15, quantity: 3, category: "Books" },
    { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
    { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
    { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
    { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
    { name: "Notebook", price: 10, quantity: 4, category: "Books" },
    { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
    { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
    { name: "External Hard Drive", price: 80, quantity: 1, category: "Electronics"},
    { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
    { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
    { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
    { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
    { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
    { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
    { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
   ];
  
   // task write a function calculateCategoryCosts return a object of {name: name, totalcost:???}

// let totalCost = shoppingCartItems.map ((a) => {
//     return {name: a.name, totalcost:a.price * a.quantity}
// })
// console.log(totalCost)
  
   // calculate discount price by 10% {name, price, quantity, totalCost}  

// let discount = shoppingCartItems.map ((a)=> {
//     let price = a.price * 0.9
// return {name: a.name, price: price , quantity: a.quantity, totalcost: price * a.quantity}
// })
// console.log(discount)

   // filter quantity over 2 pieces

// let filterByQuantity = shoppingCartItems.filter ((a)=>{
//     return a.quantity > 2
// })
// console.log(filterByQuantity)

   // filter by average price below and above

function aboveAve () { 
    let sum = 0;
    let avePrice = 0;
    let discount = shoppingCartItems.map ((a)=> {
        let price = a.price * 0.9
    return {name: a.name, price: price , quantity: a.quantity, totalcost: price * a.quantity}
    })
    for (let i = 0; i < discount.length  ; i++){  
            sum = sum + discount[i].price
            avePrice = sum / discount.length 
    }
    console.log("AveragePrice:",avePrice);
    let filterByAboveAve = discount.filter ((a)=>{
        return a.price > avePrice        
    })
    return filterByAboveAve
}
let AboveAve = aboveAve()
console.log('AboveAve:',AboveAve)
