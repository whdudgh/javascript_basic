//BOM의 구조
console.log(window);

//open() 브라우저 실행시 창을 또 띄우기 위해 사용
let myWindow = open('../../hello.html', '나의 창');
if(!myWindow){
  alert('팝업 차단을 풀어주세요오오....');
}
// myWindow.close();