//while | do while
let i = 1, result = 0;
while(i <= 100){
  result += i;
  i++
}
console.log(result);

//for문
result = 0;
for(let i = 0; i <= 100; i++){
  result += i;
}
console.log(result);
document.write('<h2>for문을 이용한 구구단 출력</h2>')
document.write("<table border='1'>")
//동적으로 구구단 출력
for(let i = 2; i <= 9; i++){
  document.write('<tr>')
  for(let j = 1; j<=9; j++){
  document.write(`<td>${i} * ${j} = ${i*j}</td>`)
  }
  document.write
}
document.write("</table>");