// 1. Neg too ogogdonguut tuhain toonoos dooshoogoo gurav guravaar uruudaad 0 hurtel hevleh function bich
// Jishee n 10 gesen too ogogdonguut output: 10 7 4 1 baina
// 2. Hoyor too ogogdohod baga toonoos n ih too hurtel heveldeg function bich.
// Jishee n:
// input 15 9
// output: 9 10 11 12 13 14 15
// 3. 3n too ogogdohod ehnii toonoos 
// 2 dahi too hurtel 
// 3 dahi too goor ihsesen element tei array zohioj 
// butsaah function bich
// Jishee n:
// input: 10 20 2
// output: [10,12,14,16,18,20]



// 1.
function downGrade(a){
    for (let i = a; i >= 0; i=i-3) {
        console.log(i)
    }
}
downGrade(15)



// 2. 
function betweenPrint(a,b){
   if (a<b) {for (let i = a; i<=b; i++)
    console.log(i)}
else if (a>b) {for (let i = b; i<=a; i++)
    console.log(i)}
}
betweenPrint(15,9)



// 3.
function num(a,b,c){
    let array =[];
    let count =-1;
    for (let i = a; i<=b; i=i+c){
        count++;
        array[count]= i;
    }
    console.log(array)
}
num(9,15,3)
