// stringfly(): json에서 스트링 타입으로
// parse(): json에서 오브젝트 타입으로

//1. object to JSON
let json = JSON.stringify(true);
console.log(json);

//2. array to JSOM
json = JSON.stringify(['apple','banana']);
console.log(json);

// 객체는 ({})로 묶어서 표현, 배열은([])로 묶어서 표현한다.
[1, true, 'str',{inkey: "value"}, null]
// 숫자
{key : 1}
// 문자열
{key: "str"}
// 오브젝트
{key:{inkey:"value"}}
// null
{key : null}

//3. 오브젝트
const rabbit = {
    name: 'tori',
    color: 'black',
    size: null,
    birthDate : new Date(),
    jump: () =>{
        console.log(`${this.name} can jump!!`);
    }
};
json = JSON.stringify(rabbit);
console.log(rabbit);

// 원하는 프롬퍼티만 선택하여 출력
json = JSON.stringify(rabbit,['name','color']);
console.log(json);

// 콜백
json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

// json -> object
console.clear();
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);


const obj1 = JSON.parse(json,(key,value) =>{
    console.log(`key:${key}, value:${value}`);
    // return value;
    return key === 'birthDate' ? new Date(value) : value;
}) //json은 전부 타입이 스트링 타입이 되기 떄문에 타입을 변화시키는거 

console.clear();
console.log(obj1.birthDate);
console.log(obj1.birthDate.getDate());