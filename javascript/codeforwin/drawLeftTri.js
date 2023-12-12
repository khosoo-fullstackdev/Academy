function drawLeftTri(size) {  
    let triSqr = "";  
    for (let i = 0; i < size; i++) {    
        for (let j = 0; j < size; j++) {      
            if (i >= j) {        
                triSqr += "*";      
            }    
        }    triSqr += "\n";  
    }  console.log(triSqr);
}
drawLeftTri(5)