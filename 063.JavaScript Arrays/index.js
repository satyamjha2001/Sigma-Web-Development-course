let arr = [1, 2, 4, 5, 7];

console.log("array: " + arr, typeof arr);
// console.log("Length of array: "+arr.length);
// console.log("values at particular index");
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
console.log(arr.toString());
console.log(arr.join(" and "));

arr.pop();
console.log(arr);
arr.push(100);
console.log(arr);
arr.push("satyam");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("hi");
console.log(arr);
delete arr[4];
console.log(arr);
console.log(arr.length);
console.log(arr[4]);

//concat
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
console.log(a.concat(b, c));
console.log(a);

//sort
let s = [3, 1, 5, 2];
s.sort();
console.log(s);

console.log("splice");
let number = [1, 2, 3, 4, 5];
console.log(number);
number.splice(1, 2);
console.log(number);
number = [1, 2, 3, 4, 5];
console.log(number);
number.splice(1, 2, 13);
console.log(number);

//slice
console.log("slice");
let num = [1, 3, 4, 2, 5];
console.log(num);
console.log(num.slice(2));
console.log(num.slice(2, 4));
