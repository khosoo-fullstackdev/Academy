function sum(n) {
    let sum= 1
    for (let a= 1; a <= n; a=a+1)
    sum = sum * a
return sum
}
let answer = sum (5)
console.log("Answer:",answer)