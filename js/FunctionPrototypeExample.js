//전역 함수 선언(알반함수에서의 this는 브라우저객체를 가리킴)
function doTask() {
  //console.log('뭔가 함....');
  console.dir(this);
  console.log(`이름: ${this.name}, 나이 : ${this.age}`);
}
//객체 생성(객체의 this는 자기자신)
let person = {
  name : '바나나',
  age : '10',
  doTech : function () {
    console.log('프로그래밍을 강의합니다..');
  }
}

//함수 직접 호출
doTask();

//함수 간접 호출(동적호출)
doTask.call();

//doTask()함수를 person에 넣어서 실행시키고 싶음
doTask.call(person);

//특정객체에 동적 속성 추가 기능
function addAttribute(key, value){
  this[key] = value;
}

addAttribute('name', '바나나');
addAttribute('age', '10');

console.dir(window);

let user = {};

//call(); 비전형인자로 전달
// addAttribute.call(user, 'name', '바나나');
// addAttribute.call(user, 'age', '10');

//apply(); 배열형태로 전달
addAttribute.apply(user, ['name', '바나나']);
addAttribute.apply(user, ['age', '10']);

//bind(); 함수형태로합쳐서 반환함.
let addProperty = addAttribute.bind(user);
addProperty('name', '바나나');
addProperty('age', '10');
console.dir(user);

let array = [1, 5, 6, 7, 9, 8];
for (const key in array) {
  //누군가가 Array.prototype.hasOwnProperty를 누군가 오버라이딩 했을시
  //순수 hasOwnProperty를 사용하기 위해 if문이 추가된것임.
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
  }
}