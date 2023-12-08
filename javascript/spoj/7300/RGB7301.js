function elderDec(a){
    let count = 1;
    while ( a >= 10){
        count ++;
        a = (a- a%10)/10
    }
    console.log('ahmad oron=', a)
    console.log(count,"оронтой тоо");
    
}
elderDec(5345893)
