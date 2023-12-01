function bodlogo (a,b,c) {
    let sum = 1
    if (a%2==1){sum=sum*a}
    if (b%2==1){sum=sum*b}
    if (c%2==1){sum=sum*c}
    return sum
}
let answer= bodlogo(11,6,7)
console.log(answer)