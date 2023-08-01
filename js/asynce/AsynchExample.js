console.log('1실행');
doTask();
console.log('2실행');

function doTask(){
  setTimeout(() => {
    console.log('doTask() 실행');
  },1000);
}

console.log('3실행');
