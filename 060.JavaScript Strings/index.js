console.log("This is strings tutorial");
let a = "Satyam";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
//console.log(a[6]); //shows undefined
console.log(a.length);
let real_name="Satyam";
let friend="Rohan";
console.log("His name is " + real_name + " and his friends name is " + friend);
//or
console.log(`His name is ${real_name} and his friends name is ${friend}`);  //template literals

let b="Rameshwar";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(2,7));
console.log(b.slice(3));

console.log(b.replace("eshwar","ji"));
console.log(b.concat(a,"pranam","ji"));

console.log(b);
