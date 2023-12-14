// filterByBrand (" ")
// filterByPrice (max,min)
// filterByStock 
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
// let ner = 'Apple'
// let byBrand = products.filter((a) => {
//     return a.brand == ner
// });
// console.log('byBrand:',byBrand)


let byPrice = products.filter((a) => {
    return a.price >= 1000 && a.price <= 2000
});
console.log('byPrice:', byPrice)


// let sortByStock = products.sort((a,b) => {  
//     return a.stock-b.stock
// });
// console.log('sortByStock', sortByStock)



