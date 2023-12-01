function bodlogo (a,b,c) {
    let sum = 0
    if (a%2==0){sum=sum+a}
    if (b%2==0){sum=sum+b}
    if (c%2==0){sum=sum+c}
    return sum
}
let answer= bodlogo(6,6,7)
console.log(answer)