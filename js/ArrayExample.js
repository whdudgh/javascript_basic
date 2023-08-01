//배열객체 이용(순수가 아닌 Set Map 등 다들어있음)

//배열생성자이용한 배열생성
// let array = new Array();

//배열리터럴표현식생성
let array = [10, , 20];

//맨뒤에 추가
array.push(10);
array.push('김기정바보');
array.push(new Student(10, '누텔라', 50, 40, 30));
array.push(new Student(11, '사과쨈', 90, 100, 95));

//맨앞에 추가
array.unshift(new Student(12, '포도쨈', 85, 100, 45));

for(const value of array){
  console.log(value);
}

//첫번째 항목 가져오고 싶을 때 [index]
console.log(array[0]);
//index를 키값으로 보고 자동으로 문자열로 변환해 검색함. 그래서 index에 '0'도 가능한것.
console.log(array['0']);
// console.dir(array);
console.log(array.length);

//0번째 인덱스에 있는 값 삭제하고 싶음.
delete array[0];
//맨앞 삭제
array.shift();
// array.pop();
console.dir(array);