//콜백함수는 왜써야 하나?
//사칙연산을 하는 프로그램을 짜고싶음 +,-,/,*
//호출하는쪽에게 처리를 맏기고싶음.
function calculator (fn, a, b) {
  //데이터 처리
  return fn(a, b);
}

let num1 = 300;
let num2 = 500;

//더하기하고싶음
let result = calculator(function (x, y) {
  return x + y;
}, num1, num2);

console.log(result);

//곱하기하고싶음
result = calculator(function (x, y) {
  return x * y;
}, num1, num2);

console.log(result);

//더하기랑 나누기하고싶음(콜백함수)
result = calculator((x, y) => x + y, num1, num2);

console.log(result);

result = calculator((x, y) => x / y, num1, num2);

console.log(result);

//즉시 호출(Self호출)
(function doTask(){
  console.log('나는 즉시 호출됩니다...');
})();