let array = [];
let push = (a) => {
  array.push(a);
};
let pop = () => {
  return array.pop();
};
push(1);
push(0);
push(5);
push(100);
push(20);
console.log(pop());
console.log(pop());
console.log(array);