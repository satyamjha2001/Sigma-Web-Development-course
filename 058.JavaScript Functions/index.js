nice("Ram");
function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " you are smart");
    console.log("Hey " + name + " you are hardworking");
}
// function sum(a,b){
//     console.log(a+b);
// }
// sum(3,6);
function sum(a, b, c = 10) {
    return a + b + c;
}
let result1 = sum(3, 10);
let result2 = sum(32, 11.33);
let result3 = sum(38, 78, 1);
console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

//Arrow function

const fun1 = (x) => {
    console.log("I am an arraow function", x);
}
fun1(34);
fun1(66);
fun1(232);