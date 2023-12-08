function findSum(a){
    let sum=0;
    while (a !=0){
        sum = sum + a%10;
        a = a/10
    }
console.log(sum)
}
findSum(134314)