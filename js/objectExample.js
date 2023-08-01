//강아지 객체 즉시생성(CREATE)
//객체 리터럴 표현식
let dog = {
  //속성 생성(속성)
  name : '멈뭄미',
  age : 5,
  kind : '비숑',
  //메소드 생성(기능)
  eat : function(){
    console.log(`${this.name}가 냠냠`);//this의 첫번째 용도 객체자기자신의 키값에 적용된 값 불러올때.
  },
  //자바스크립트도 오버라이딩 가능.
  toString : function (){
    return '으이?';
  }
};
//객체의 속성을 검색(자바의 getter)
//[]안에 키값을 줘서 벨류를 얻어올 수 있음. -같은 특수문자 들어가 있을때 사용.
//[]는 css의 속성값같은걸(font-size) 얻어올때 사용하게됨.
console.log(dog.name);
console.log(dog['name']);
console.log(dog.age);
console.log(dog.kind);
dog.eat();

//객체의 속성을 변경(자바의 setter)(UPDATE)
dog.name = '곧냥이';
console.log(dog.name);

//맵에 저장된 속성(프로퍼티)의 제거(DELETE)
//delete연산자 이용
delete dog.age;
console.log(dog.age);

//기능 추가
dog.work = function(){
  console.log('잘 걷습니다...');
}

dog.work();

//in연산자
//속성이 뭐가있나 검색하는기능
if('age' in dog) {
  console.log(dog.age);
} else {
  console.log('age 속성이 없유...');
}
//해당 객체의 key, value의 조회...
//const key는 in연산자로인해 "key"로 반환됨으로 값을 조회할땐 []에 key값을 넣어줘야함.
for (const key in dog) {
  console.log(key, dog[key]);
}
//객체는 for of못씀.
// for (const value of dog) {
//   console.log(value);
// }
//배열은 for of가능
let array = [5, 6, 9, 1];
for (const value of array) {
  console.log(value);
}
//자바스크립트의 object도toString()이 있어 자동호출되어 사용함.
// console.log(dog.toString());
console.log(dog);

//디버깅할 때 사용하는것
console.dir(dog);

//여지껏 나온 콘솔출력물 다지우기
console.clear();