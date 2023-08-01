//템플릿 스트링
let name = ' 김기정';
let str = '선생님';
// let message = `템플릿 스트링` + name; 이렇게하면 바보
let message = `템플릿 스트링 ${name} ${str}`;
console.log(message);

//typeof 연산자
let age = 10;
console.log(typeof age);
console.log(typeof message);

//특수 숫자리터럴(키워드)
//자바는 0.0으로 나누면 인피니트 스크립트는 10/0해도 인피니트뜸.
console.log(10/0);
console.log('나는 문자열이다'/10);

//논리형
let flag = false;

let flag2 = NaN; //-> 숫자는 음수던 양수던 true로 인식함. | 문자열은 값이 있으면 무조건 참. |
console.log(typeof flag2);

if(flag2){
  console.log('참입니다...');
}

//자바스크립트는 자동형변환이 엄청 많이 발생한다..
//이게 가능한건 문자보다 숫자가 우선순위가 높아서 이렇게됨.
console.log(1000 * '10');
console.log('1000' * '10');
console.log(1000 * '10');
console.log(1000 * '10');
