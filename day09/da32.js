/* 함수 */
// function
// func();  함수 호출 - 함수가 실행
// func(){~~~} 함수 정의 - 함수를 만든다
// function[함수명](입력){~~~}
function printHello(){
    console.log("Hello!!");
}
printHello(); // 함수 호출: 함수이름(입력);

function log(message){  // 함수정의
    console.log(message);
}
log();
log("안녕");
log(123);

function showError(){
    //alert('에러발생, 다시 시도하세요');
}

showError(); // 지원되는 내장 함수들을 볼수있다. 왜냐하면 함수가 객체기 때문

function changeName(obj){
    obj.name='color';
}
const ellie ={name: 'ellie'};
console.log(ellie);
changeName(ellie);
console.log(ellie);

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage("hi");

function add(num1, num2){
    return num1 + num2;
}

const res = add(10,20);
console.log(res);

// 함수 표현식
// let func = function(){}  // 함수를 변수에 할당시킨다.
let showHello = function(){
    console.log('Hello!!');
}
showHello();
let hihello = showHello;
hihello();

// 즉시 실행 함수 : 즉시 실행되며 단 한번만 호출되어 다시는 호출할 수 없다.
let res1 = (function() {
    let a = 10;
    let b = 20;
    return a+b;
}());
console.log(res1)

let res2 = (function(a,b){
    return a * b
}(10,20));
console.log(res2);

let func = () =>{};

const simplePrint = function(){
    console.log('simple');
}
console.log(simplePrint);
console.log(simplePrint());
const simplePrint1 = () => {console.log('simple');}
console.log(simplePrint1());
const simplePrint2 = () => console.log('simple');
console.log(simplePrint2());
simplePrint2();

const add1 = (a, b) => {
    return a + b;
}
console.log(add1(10,20));

const hi = () =>{alert('안녕');};

document.open();
let hi1 = (user) => {document.write(user +" 안녕하세요");};
hi1("홍길동");

// 콜백함수
function res3(answer,printYes,printNo){
    if(answer === 'love'){
        printYes();
    }else printNo();
}
const printYes = function(){
    console.log("Yes");
}
const printNo = function(){
    console.log("NO");
}
res3('lve', printYes, printNo);
res3('love', printYes, printNo);