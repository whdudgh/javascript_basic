class Person {
  //정적(static)속성
  static commonAttribute = "공통속성";
  static commonMethod(){
    console.log("공통 메소드입니다..");
  }

  constructor(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
  }
  //은닉화를 위한 setter getter 등록 메소드처럼 생겼지만 메소드가 아님.
  //get이 있으면 항상 set이 세트로 와야 오류 안남.
  get name (){
    return this._name;
  }

  set name (name){
    //데이터 유효성검사를 위한 예외
    if(name === undefined){
      throw new Error('이름은 반드시 입력하여야 합니다.');
    }
    this._name = name;
  }

  get age (){
    return this._age;
  }

  set age (age){
    if(age < 10 || age > 100){
      throw new Error('나이는 10 ~ 100사이여야 합니다.');
    }
    return this._age = age;
  }

  showInfo(){
    console.log(`이름: ${this.name}, 나이: ${this.age}`);
  }
}

let person = new Person('바나나', 10);
//다이렉트 접근이 아닌 set name (name){}으로 접근 한거임.
person.name = '복숭아';

console.log(person.name);
console.log(person.age);
person.showInfo();
console.dir(Person);


// try{
//   person.name = undefined;
// }catch(e){
//   alert(e.message);
// }

try{
  person.age = 900;
}catch(e){
  alert(e.message);
}
person.showInfo();

//static속성, 메소드 접근
console.log(Person.commonAttribute);
Person.commonMethod();


// person.commonMethod(); err