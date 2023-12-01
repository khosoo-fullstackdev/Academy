function equality(a,b,c,d) {
    let sum = 0
    if (a%11>0) {sum=sum+a}
    if (b%11>0) {sum=sum+b}
    if (c%11>0) {sum=sum+c}
    if (d%11>0) {sum=sum+d}
    return sum
}
let eq = equality(5,2,10,22)
console.log(eq)