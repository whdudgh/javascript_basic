//element 관련 DOM
//동적 스타일 적용하기
//하나만 적용
// let h1Element = document.querySelector('h1');
// h1Element.style.color = 'green';
// h1Element.style['background-color'] = 'yellow';
//전부적용
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.color = 'green';
//   element.style['background-color'] = 'yellow';
// });

//확인필요
// let hoverlist = document.querySelectorAll('h1:hover');
// hoverlist.forEach(element => {
//   element.style['background-color'] = 'blue';
// });

//버튼누르면 적용되게 할 때 사용할 수 있는 방법(h1태그에 동적으로 .head{} style을 적용하는 방법)
//className은 클래스명을 모두 초기화하고 클래스명을 head로 덮어씌움.
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.className = 'head';
// });

//classList는 동적으로 클래스명을 추가하거나 삭제가 가능함.
let list = document.querySelectorAll('h1');
list.forEach(element => {
  //클래스명추가
  element.classList.add('head');
  //클래스명 제거
  element.classList.remove('head');
  //해드를 추가제거, 추가제거 계속함.
  setInterval(() => {
    element.classList.toggle('head');
  } , 1000);
});
