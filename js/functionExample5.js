// 표준 내장 함수.
//사용자에게 yes or no를 입력받고 싶음
//confirm();에서 확인은 true, 취소는 false
// const yn =confirm('집가고싶음?');
// if(yn){
//   console.log('나도');
// } else {
//   console.log('뭐여?');
// }

//어떤 프로그램을 1초후 실행하고싶음(비동기)
//setTimeout(값1, 값2) 값1=>콜백함수 | 값2=>밀리세컨드
// setTimeout(() => console.log('1초후 실행됩니다..'), 2000);

//초단위로 실행되었음 좋겠음.
//setInterval(값1, 값2) 값1=>콜백함수 | 값2=>밀리세컨드
// let second = 1;
// let timer =setInterval(() => {
//   document.write(`<h3>${second}초</h3>`);
//   second++;
// }, 1000);

//10초후 중지시키고싶음.
//clearInterval(값)=>주기적으로 지움|clearTimeout(값)=>딱 한번만지움
//값=>setInterval | setTimeout의 결과는 timer객체로 반환됨 그걸 넣은것.
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

//스크립트의 parseInt()는 문자열의 숫자만 인식하여 숫자타입으로 변환해줌
let money = '100원';
money = parseInt(money);
console.log(money + 100);

//어떤 값이 NaN인지 확인하는 함수. isInfinite도 있음.
let result = 1000/'김기정';
if(isNaN(result)){
  console.log('NaN이 맞습니다..');
} 