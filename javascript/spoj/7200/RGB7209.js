function sum(n1,n2) {
    let sum = 1;
    for (let a = 1; a <= n2; a = a + 1){
        sum = sum * n1
        console.log("Answer:", n1,'^',a,'=',sum)
    }
}
sum (3,4)
