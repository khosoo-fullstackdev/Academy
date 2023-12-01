function equality(a,b,c) {
    let sum = 0
    if (a%5==0) {sum=sum+1}
    if (b%5==0) {sum=sum+1}
    if (c%5==0) {sum=sum+1}
    return sum
}
let eq = equality(5,2,10)
console.log(eq)