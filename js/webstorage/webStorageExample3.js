
document.querySelector('#saveBtn').addEventListener('click', event => {
    savePerson();
});
document.querySelector('#readBtn').addEventListener('click', event => {
    readPerson();
});
function savePerson() {
    let person = {
        name: '김기정',
        age: 30,
        weight: 65.78
    };
    // let list = [];

    // localStorage.person = person;
    // localStorage.name = person.name;
    // localStorage.age = person.age;
    // localStorage.weight = person.weight;
    // 객체가 가지고 있는 모든 속성을 문자열로 변화해서 저장할 수 없을까?
    // JSON 활용한 저장
    let personJson = JSON.stringify(person);
    localStorage.person = personJson;
    
}
function readPerson() {
    let person = JSON.parse(localStorage.person);
    console.log(person.name, person.age, person.weight);
}

