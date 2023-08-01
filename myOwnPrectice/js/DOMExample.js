// HTML문서 접근
//노드의 검색
console.log(document.documentElement);
console.log(document.documentElement.nodeName);
console.log(document.documentElement.nodeType);
console.log(document.documentElement.nodeValue);

//1.태그이름으로 검색
let htmlCollection = document.getElementsByTagName('p');
// console.log(htmlCollection);
for (const list of htmlCollection) {
  console.log(list);
}

//2.id속성으로 검색
let element = document.getElementById('dom');
console.log(element);

//3.클래스속성으로 검색
htmlCollection = document.getElementsByClassName('head');
console.log(htmlCollection);

//4.CSS 선택자를 이용한 검색(이거 매우 추천함. 제일좋음)
element = document.querySelector('#dom');
console.log(element);

element = document.querySelector('li:first-child');
console.log(element);
element = document.querySelector('li:last-child');
console.log(element);
element = document.querySelector('li:nth-child(2)');
console.log(element);
element = document.querySelector('li:nth-child(2n+1)');
console.log(element);

//querySelectorAll();은 유사배열객체 nodeList로 리턴함
//이때 나오는 배열은 Array객체를 확장한 nodeList라는 배열형태라서
//forEach문이 사용 가능함.
element = document.querySelectorAll('.head');
element.forEach(element => {
  console.log(element);
});
console.log('==================================================');
//---------------------------------------------------------------
//노드의 탐색
//부모탐색
element = document.querySelector('#dom').parentNode;
console.log(element);

//부모노드가 요소가 아니면 null반환
element = document.querySelector('#dom').parentElement;
console.log(element);

//자식노드 탐색
element = document.querySelector('#dom').childNodes;
console.log(element);
console.log(element.length);//공백도 자식포함함.
element = document.querySelector('#dom').children;
console.log(element.length);//공백은 자식포함하지않음(권장)

//형제노드 탐색
element = document.querySelector('#dom').previousSibling;
console.log(element);
element = document.querySelector('#dom').previousElementSibling;
console.log(element);

element = document.querySelector('#dom').nextSibling;
console.log(element);
element = document.querySelector('#dom').nextElementSibling;
console.log(element);

console.log('==================================================');
//---------------------------------------------------------------
//노드생성 및 추가
let li = document.createElement('li');
let text = document.createTextNode('나 추가된노드');
li.appendChild(text);
document.querySelector('#dom').appendChild(li);
//노드의 삭제
document.querySelector('#dom').removeChild(li);
//속성추가
let a = document.createElement('a');
a.setAttribute('src','https://www.naver.com');
a.setAttribute('name','newAtag');
document.querySelector('body').appendChild(a);
//읽을땐 InnerText(); 추가할땐 InnerHTML();
document.querySelector('ul').innerHTML = '<li>낙하산</li>';

//덮어씌워지지 않으려면 이런식으로 표시할곳을 따로 만들거나
//노드생성할때 처럼 생성후 생성된 노드에InnerHTML로 태그를 넣고
//완성된 노드를 ~~밑에 appenChild하면 됨.
function show(){
  let div = '<div>댓글 내용입니다...</div>';
  let article = document.querySelector('article');
  article.innerHTML = div;
}
//속성삭제

