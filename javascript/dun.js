// let midTerm1 = 70;
// let midTerm2 = 70;
// let final = 70;
// if ((midTerm1 + midTerm2 + final) / 3 < 60) {
//   console.log("F");
// } else if ((midTerm1 + midTerm2 + final) / 3 < 70) {
//   console.log("D");
// } else if ((midTerm1 + midTerm2 + final) / 3 < 80) {
//   console.log("C");
// } else if ((midTerm1 + midTerm2 + final) / 3 < 90) {
//   console.log("B");
// } else {
//   console.log("A");
// }
function findGpa(num1, num2, num3) {
  let midTerm1 = num1;
  let midTerm2 = num2;
  let final = num3;
  if ((midTerm1 + midTerm2 + final) / 3 < 60) {
    return "F";
  } else if ((midTerm1 + midTerm2 + final) / 3 < 70) {
    return "D";
  } else if ((midTerm1 + midTerm2 + final) / 3 < 80) {
    return "C";
  } else if ((midTerm1 + midTerm2 + final) / 3 < 90) {
    return "B";
  } else {
    return "A";
  }
}
console.log(findGpa(70, 70, 70));
