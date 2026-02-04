let arr = [1, 2, 3];
let arr2 = [4];

function pushToArray(arr) {
  arr2.push(arr);
}

pushToArray(arr);

console.log(arr);
console.log(arr2);
