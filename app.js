
var cl = console.log;

// 1. Find the length of "coding".

var str = "Coding"
var result = str.length
cl(result);            //6

//2. Concatenate "Hello" and "Word".

var str = 'Hello';
var str1 = 'Word';
var result = str.concat(" ", str1)
cl(result);           // Hello World

//3.Concatenate "I am" and "learning JavaScript".and at the end of "Wow"

var str = 'I am';
var str1 = 'learning JavaScript';
var str2 = 'Wow';
var result = str.concat(" ", str1, ' ', str2);
cl(result);                         //I am learning JavaScript Wow

//4.Convert "Web developer" to upper case
var str = 'Web developer';
var result = str.toUpperCase();
cl(result)          //WEB DEVELOPER

//5.convert "JAVASCRIPT" to lower case
var str = 'JAVASCRIPT';
var result = str.toLowerCase()
cl(result)             // javascript

//6.Check if "JavaScript" contains "script"
var str = "JavaScript";
var result= str.includes('Script')
cl(result)                       // true

//7.check if the string "Hello 123"Contains any digits.
var str = "Hello 123";
var result= /\d/.test(str)
cl(result)               //true

//8.Find "abc" is included in "abcdefg".
var str = 'abcdefg';
var abcIsIncluded = str.includes('abc');
cl(abcIsIncluded);          // true

//9.Get the charactor at index 3 of "coding".
var str = 'Coding';
var result= str.charAt(3);
cl(result)                      //i

//10.Find the first occurance of "a" in banaba.
var str = 'banana';
var FirstA = str.indexOf("a");
cl(FirstA);     //1

//11.Find the last occurance of "a" in banaba.

var str =   'banana';
var lastA = str.lastIndexOf('a');
cl(lastA);             //5

//12.Extract "World" from "Hello World"
var str = 'Hello World';
var result = str.slice(6);
cl(result)              //World

//13.Replace "apple" with "orange" in "i like apple".
var str = "i like apple";
var replace = str.replace('apple','orange');
cl(replace)             //i like orange

//14.Replace all "is" with "was" in the string "this is a test".
var str = "This is a test";
var replace = str.replace(/is/g,'was');
cl(replace);               // there is a problem like this Thwas was a test

//15.Remove whitespace from both sides of " trim me  ".

var str = " Trim me ";
var trim = str.trim();
cl(trim)     //Trim me

//16.split "dog,cat,bird" into on array
var str = 'dog,cat,bird';
var split = str.split("");
cl(split)  //['d', 'o', 'g', ',', 'c', 'a', 't', ',', 'b', 'i', 'r', 'd']

//17.Find the substring from index 2 to 5 in "program".

var str = "program";
var result = str.substring(2,5);
cl(result) //ogr

//18.Slice the first 4 characters of "JavaScript".
var str= "JavaScript";
var result = str.slice(0,4)
cl(result) //Java

//19.Change "javascript" to "JavaScript".
var str='Javascript';
var result = str.replace("javascript","JavaScript")
cl(result); 

// 20.Remove the first character from "start".
var str = 'start';
var result= str.substring(1);
cl(result);  // tart

//21.Remove the last character from "stop".
var str = 'stop';
var result = str.slice(0,-1);
cl(result);

//22.repeat "Hi" 5 times.
var str =  'hi ';
var result = str.repeat(5)
cl(result);


