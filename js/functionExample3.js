//함수 리터럴 표현식
//궂이 이름이 필요없어 빼면 익명함수(리터럴 표현식에만 가능)
let myFuction = function /*doTask*/(message) {
  console.log(message);
}

function doTask (fn) {
  //콜백함수.........
  let message = "오이핫도그";
  fn(message);
}

myFuction('함수 리터럴 표현식입니다...');

doTask(myFuction);

//나만의 연습------------------------------------------------------------------
let sumFuction = function (x, y) {
  let result = x+y;
  console.log(result);
}

function doSum (fn, num1, num2) {
  let x = num1; 
  let y = num2;
  fn(x,y);
}

let x = 1;
let y = 2;

doSum(sumFuction, x, y);
//원래는 함수 내부에서 변수선언 후 변수에 외부함수만 사용할 함수를 선언하는 역할임.