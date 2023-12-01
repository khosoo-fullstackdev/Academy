function omega(a, b, c, d) {
    let result = 0
    if (a>80) {result= result + a}
    else {return "no compatible answer"}
    if (b>80) {result= result + b}
    else {return "no compatible answer"}
    if (c>80) {result= result + c}
    else {return "no compatible answer"}
    if (d>80) {result= result + d}
    else {return "no compatible answer"}
    return result 
    }
  let answer = omega(5, 4, 3, 2);
  console.log("Answer:",answer);
