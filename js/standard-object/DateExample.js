//Date 객체의 주요 메소드 연습
//
let today = new Date();
console.log(today.toString());
console.log(today.toLocaleString());//현재브라우저의 언어에 맞게 표현해줌.
console.log(today.toLocaleTimeString());//현재언어에 맞는 나라의 시간 표시.
console.log(today.toLocaleDateString());//현재언어에 맞는 날짜 표시.

console.log(today.getTime());

today = Date.now();
today = new Date().setTime(today);
console.log(today.constructor);
console.log(today.toLocaleString());

