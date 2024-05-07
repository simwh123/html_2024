console.log("Hello Javascripy2!!!");
console.log();

let name='adam';
console.log(name);

var a;
console.log(a);
console.log(b);
var b;

console.log(c);
let c;
let d;
console.log(d);
sayHello();



const str1='strId';
const str2='strId';
console.log(str1 === str2);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(symbol2);
console.log(typeof(symbol1));
console.log(symbol1 === symbol2);
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3);
console.log(symbol3 === symbol4);

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
text ='10'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '22' / '2';
console.log(`value: ${text}, type: ${typeof text}`);


const bird={species: "kestrel"};
console.log(bird.species);
bird.species = "Striated Caracara";
console.log(bird.species);

console.log(String(30), String(true), String(false));
console.log(String(null));
console.log(Number('12345'));



/* 변수 */
// 1. 변수선언(3개의 키워드)
// var, letm const: ES6
// let - 지역변수, 재선언, 호이스팅시 초기화 안됨 <-> var
// const - 상수
/* 출력방법 */
// console.log
// document.wirte
// alert()
// innerHTML