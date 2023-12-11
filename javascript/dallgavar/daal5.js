function isPrime(a){
    for (let i = 2; i<a; i++){
        if (a%i==0){
            return false}
        else {return true}
    };
}  
function findPrime(min,max){
let count = 0; 
let primes =[];
    for (let i =min; i<max; i++ ){
    if (isPrime(i) == true){
        primes[count]= i
        count++ 
    }
    }
    return primes
}
let Primes = findPrime(1,11)
console.log('Primes:',Primes)