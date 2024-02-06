let arr = [1, 13, 5, 7, 11];
let newarr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element ** 2);

}
console.log(newarr);

console.log("By Map");
let newArr = arr.map(e => {
    return e ** 2;
});
console.log(newArr);

console.log("filter");

const greaterthanseven = (e) => {
    if (e > 7)
        return true;
    return false;
};

console.log(arr.filter(greaterthanseven));
console.log("reduce");
let arr2 = [1, 2, 3, 4, 5, 6];
const red = (a, b) => {
    return a + b;
}

console.log(arr2.reduce(red));

console.log(Array.from("Satyam"));