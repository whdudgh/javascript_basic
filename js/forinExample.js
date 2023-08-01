// for in문

//배열 기초
//배열 리터럴 []로 해야함
let array = [3, 3, 3, 3, 5, 8];
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  console.log(num);
}

//좀더 쉽게 돌리고 싶음for in 요소의 순서를 반환해줌
//console.log는 인자 여러개 가능
for (let i in array) {
    // console.log(i);
    console.log(i,array[i]);
  }

  //자바의 향상 for문과 동일
for (let num of object) {
  console.log(num);
}