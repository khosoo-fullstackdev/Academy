// 1. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :"Red,Green,White,Black""Red+Green+White+Black"

myColor = ["Red", "Green", "White", "Black"];
let merge = myColor.join ()
console.log(merge)

// 2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
// For example if you accept 025468 the output should be 0-254-6-8.

myNumber = [025468]

// 3. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let findA=arr1.filter ((a) => {
    return a == 2
})
console.log(findA)

// 4.Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

text = ['The Quick Brown Fox']
let textWarp = text.map((a) => {

})

// 5.Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :"row 0"" 1"" 2"" 1"" 24""row 1"------------

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// 6.  Write a JavaScript program to find the leap years in a given range of years.

