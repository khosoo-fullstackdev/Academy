function hollowSqr(size) {  
    let sqrStr = "";  
    for (let i = 0; i < size; i++) {    
        for (let j = 0; j < size; j++) {      
            if (i == 0 || i == size - 1 || j == 0 || j == size - 1) 
            {        
                sqrStr += "*";      
            } else {        
                sqrStr += " ";      
            }    
        }    
        sqrStr += "\n";  
    }  
console.log(sqrStr);
}
hollowSqr(10)