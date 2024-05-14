/* 
async
1. callback
2. promise
3. async await
*/

// synchronous
console.log(1);
console.log(2);

// async
console.log(1);
setTimeout(() => {
    console.log(2);
},1000);
console.log(3);

function printImmedi(print){
    print();
}
    printImmedi(() => console.log("Hello!"));
function printDelay(print, timeout){
    setTimeout(print, timeout);
}
printDelay(()=> console.log('async callback'),4000);

// promise : 콜백함수 대신에 사용하는 비동기 오브젝트. producer와 consumer를 연결해주는 특변할 js 객체
//  promise를 사용해서 비동기 실행 함수를 만들고 실행 결과가 성공되면 resolve(value)를 호출하여 
//  결과값을 consumer에게 전달한다. 실패하면 reject(error)를 호출하여 에러를 전달한다.
//  대기(pending), 이행(fulfilled), 거부(rejected), consumer: .then()

// state : pending -> fulfille or rejected
//1. producer
// promise를 생성하는 순간에 자동으로 실행된다.
const promise = new Promise((resolve,reject) => {console.log("doing something. . .");});

let promise1 = new Promise((resolve, reject) => {
    console.log('doing');
    setTimeout(()=>{
        resolve('adam'); //실행이 정상적으로 완료되면 resolve 호출
    },2000);
});
promise1.then((value) =>{
    console.log(value);
});
// resolve()가 전달한 값 'adam' 을 then()을 통해서 받아온다.

let promise2 = new Promise((resolve,reject) => {
    console.log('doing');
    setTimeout(()=>{
        reject(new Error('no'));
    },2000);
});

promise2.then((resData)=>{
    console.log(resData);
}).catch((error) =>{
    console.log(error);
})
.finally(()=>{
    console.log('run');
});
console.clear();
let fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num-1);
        },1000)
    })
})
.then(num => console.log(num));

let getHan = () =>{     // 중괄호를 사용하면 return이 필요하다
    return new Promise((resolve,reject)=> {
        setTimeout(()=>resolve('Hi'),1000);})
};
let getEgg = (hen) =>{
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve('Bye');
        },1000);
    })
}
getHan()
.then(hen => getEgg(hen))
.then(egg => console.log(egg));

console.clear();

function fetchUser(){
    return 'ellie';
}
function fetchUser(){
    return new Promise((resolve,reject)=>{
        resolve('haha');
    });
}
fetchUser().then((v1) =>{
    console.log(v1);
});

async function fetchUser(){
    return 'ellie';
}

const user1 = fetchUser();
user1.then(console.log);

async function func1(){
    return 1;
}
func1().then(alert);

// await = async키워드가 있는함수에서만 사용가능
async function func2(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('com');
        }, 2000);
    })
    let result = await promise;
    alert(result);
}
func2();

// 동기적 처리

function pick(){
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    });
}

async function getApple(){
    return 5
}

async function getBanana(){
    return 8
}

