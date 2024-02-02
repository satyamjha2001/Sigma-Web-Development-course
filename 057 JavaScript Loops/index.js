console.log("Tutorial on Loops");
let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);
//For loop
for (let i = 0; i < 10; i++) {
    console.log(a + i);
}
let obj=
{   
    name:"satyam",
    course: "B.TECH",
    Branch:"CSE",
    Role:"Programmer"
};
// console.log(obj);
//For in loop (for object only)
for (const key in obj) {
        const element= obj[key];
        console.log(key,element);
        // console.log(key);
}
//For of loop (for iterator like array)
for (const c of "Satyam") {
    console.log(c);
}

//While loop
let i=0;
while(i<6)
{
    console.log(i);
    i++;
}
//do while loop
let j=0;
do{
    console.log(j);
    j++;
}while(j<5);