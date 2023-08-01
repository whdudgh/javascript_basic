let x = 88.3434343434334;
console.log(Number.MAX_VALUE);
//넘버객체의 메소드를 사용하기 위해 x를 객체화함.
x = new Number(x);
console.log(x.toFixed(2));
//동적으로 x를 객체화하기위해 뒤에 .하나 찍음.
let x2 = 88.3434343434334.toFixed(2);
console.log(x2);

let y = '34343';
//new 없이 하면 해당하는것을 숫자로 변환해줌. 하지만 숫자와 문자가 혼합되었을 경우
//NaN가 결과가 나오니 parseInt로 하는게 좋음.
let result = Number(y);
console.log(result);