// let user = new Object(); 밑에와 같음.
let user = {
  name : '복숭아'
}

//user의 프로토타입을 알고싶음
//isPrototypeOf(); 
console.log(user);
console.log(Object.prototype.isPrototypeOf(user));

//기본타입임 객체아님
//동적 객체 변환 .찍는순간 객체로 오토박싱
let str = 'xxx'.charAt(0);
//객체임
let str2 = new String('yyy');
console.log(Object.prototype.isPrototypeOf(str2));

//object의 static 메소드 활용
//깊은복사

let user2 = {};
Object.assign(user2, user);

console.dir(user2);
let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee);