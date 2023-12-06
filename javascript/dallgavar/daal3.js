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
function findAboveAvg(prods) {  
    let avgPrice = 0;  
    let sumPrice = 0;  
    for (let i = 0; i < prods.length; i = i + 1) {    
        sumPrice = sumPrice + prods[i].price;  }  
        console.log("sumPrice:", sumPrice);  
        avgPrice = sumPrice / prods.length;  
        console.log("avgPrice:",avgPrice)
        // now filter price above avg  
    let filterdProd = [];  
    let count = 0;  for (let i = 0; i < prods.length; i++) 
    {    if (prods[i].price > avgPrice) 
        {      filterdProd[count] = prods[i];      
            count++;    }  }  
            return filterdProd;
        }
let aboveAVG = findAboveAvg(products);
console.log("aboveAVG:", aboveAVG);