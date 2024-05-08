/* 배열 */
const arr1 = new Array();
const arr2 = [1,2,3,4,5];
console.log(arr2);

const fruits=[1,2,3];
console.log(fruits);
for(let i = 0;i<2;i++){
    console.log(fruits[i]);
}
// for of
for(let fruit of fruits){
    console.log(fruit);
}

// forEach
fruits.forEach(function(fruit,index,array){ //함수
    console.log(fruit,index,array)
});

fruits.forEach((fruit, index) =>{ // 애로우 함수
    console.log(fruit, index);
})

fruits.forEach((fruit) => console.log(fruits))

let ary=[1,2,3,4,5];
ary.push(6); //배열의 원소를 마지막에 추가한다.
ary.unshift(0); //배열의 첫번째 요소로 추가한다.
ary.pop(); //배열의 마지막 원소를 삭제한다.