let products =[
{   pname : 'Iphone',
brand : 'Apple',
price : 100,
catagory: 'phone',
stock : 12
},{   pname : 'GALAXY S22 ultra',
brand : 'Samsung',
price : 200,
catagory: 'phone',
stock : 542
},{   pname : 'DirtDevil',
brand : 'samsung',
price : 150,
catagory: 'vacuum',
stock : 1210
},{   pname : 'television',
brand : 'Apple',
price : 100,
catagory: 'washing_machine',
stock : 216
},{   pname : 'Iphone',
brand : 'Apple',
price : 999,
catagory: 'headphones',
stock : 10
},{   pname : 'Iphone',
brand : 'Apple',
price : 589,
catagory: 'notebook',
stock : 7453
},{   pname : 'Iphone',
brand : 'Apple',
price : 432,
catagory: 'phone',
stock : 32
},{   pname : 'Iphone',
brand : 'Apple',
price : 1000,
catagory: 'phone',
stock : 23523
},{   pname : 'Iphone',
brand : 'Apple',
price : 12009,
catagory: 'phone',
stock : 2346
},{   pname : 'Iphone',
brand : 'Apple',
price : 103240,
catagory: 'phone',
stock : 4313
}
]
// 1.
// function setDiscount (num){
//     for (let i = 0; i<10; i=i+1){
//         products[i].price=products[i].price * (1-num/100)
//     };
// }
// setDiscount ( 20)
// console.log(products[0].price)
// 2.
// function getCatagory(text){
//     for (let i = 0; i < 10; i=i+1){
//        if (products[i].catagory == text){
//         console.log(i, "=>", products[i])
//        } 
//     };
// }
// getCatagory("phone")
// 3.
// function mostExpensiveProduct(){
//     let mostExp = products[0].price
//     for (let i = 0; i < 10; i=i+1){
//        if (mostExp < products[i].price){
//         mostExp = products[i].price;
//        } 
//     };
//     console.log(mostExp)
// }
// mostExpensiveProduct()

// 4.
function mostAvailable(){
    let mostAv = products[0].stock
    for (let i = 0; i < 10; i=i+1){
        if (mostAv < products[i].stock){
        mostAv = products[i].stock;
       } 
    };
    console.log(mostAv)
}
mostAvailable()