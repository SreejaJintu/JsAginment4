//1.concat
const arr1 = ['one', 'two', 'three', 'four']
const arr2 = [1, 2, 3, 4, 5, 6, 7]
let concatArray = arr1.concat(arr2);
console.log(concatArray);

// 2. every

let numArray1 = [11,12,13,14,15,7,9,8]

console.log(numArray1.every((num)=>num>10))


//toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//fill()
fruits.fill("kiwi")
console.log(fruits)
fruits.fill("pear",2,4)
console.log(fruits)

//find and// FindIndex

let numArr = [2,4, 5, 6, 10];
let Gthan5 = numArr.find(num=> num >5);
console.log(Gthan5);
console.log(numArr.findIndex(num=>num>5))

//flat()
//example 1
let numArr1 = [[2,4], [5, 6] ,[10,11],[12,13]];
console.log(numArr1.length)
console.log(numArr1.flat())
//example 2
const arr3 = [1,[2,3],[4,[5,6]]];
const arr4 = arr3.flat(2);
console.log(arr4);
const arr5 = arr3.flat(Infinity)
console.log(arr5);

//includes() 
//indexOf()

const arr = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr.includes("pear"));
console.log(arr.indexOf("Apple"));
console.log('if given element is is not present in array , gives -1  :'+arr.indexOf("pear"))

//join()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits1.join(" * ");
console.log(result);

//lastIndex()
const array1 = [3,4,5,2,7,3,4,1]
console.log(array1.lastIndexOf(3));
//pop
console.log(array1.pop());
console.log(array1);

//push
console.log(array1.push(5));
console.log(array1);

//reverse
console.log(array1.reverse());
//unshift
console.log(array1.unshift(1));
console.log(array1);

//shift
console.log(array1.shift());
console.log(array1);
//slice()
console.log(array1.slice(0,4));
//some(functionName)
console.log(array1.some((num)=>num>5))
//sort
console.log(array1.sort())
//spice
const array2 = [1,2,3]
array2.splice(3,0,4,5)
console.log(array2);
//filter
const array3=array2.filter(num=>num>=3)
console.log(array3)

//reduce
console.log(array2.reduce((acc,num)=>{return acc+num} ))

//map
const array4=array2.map(num=>num*2)
console.log(array4)

//forEach
array2.forEach(num => console.log(num))
//numbers.forEach(number => console.log(number));










// 3. indexOf
let text = "Hello world, welcome to the universe.";
console.log('gives the first occurenceindex of e after index 5 : '+text.indexOf("e", 5))
// 4.lastIndexOf
let str6 = "hello world hello";
console.log(str6.lastIndexOf("hello"));

// 5.padEnd
let name = "sree";
console.log(name.padEnd(8, '**'));
// 6.padStart
let colr = "sree";
console.log(colr.padStart(6, '--'));

// 7.repeat
let str4 = 'HelloWorld';
console.log(str4.repeat(3));

//8 .replace
const str1 = '    Hello World   '
console.log(str1.replace('World', 'Universe'));
//9.search
console.log(str1.search('Hello'))
//10 slice:
console.log(str1.slice(0,5))
//11 split
console.log(str1.split(' '))
//12 startsWith:
console.log(str1.startsWith('Hello'));
//13 substr:
const str2 = str1.substr(6,3)
console.log(str2);
//14 substring:
const str3 = str1.substring(6,12)
console.log(str3);
//15 toLowerCase:
console.log(str1.toLowerCase());
//16 toUpperCase:
console.log(str1.toUpperCase());
//17 trim:
console.log(str1.trim());
//18 trimEnd:
console.log(str1.trimEnd());
//19 trimStart:
console.log(str1.trimStart());
//20 charAt
let str28 = "Hello, world!";
let char = str28.charAt(7);
console.log(char);
//21 charAt
let str29 = "Hello, world!";
let code = str29.charCodeAt(7);
console.log(code);



fruits1.pop();
console.log(fruits1)




