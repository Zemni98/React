// Array.prototype.map()

// const array1 = [1, 4, 9, 16];

/*const map1 = array1.map(function (x) {
  return x * 2;
});*/

// const map1 = array1.map((x) => x * 2);

// console.log(map1);

// Array.prototype.filter()
// filter는 주어진 함수의 test를 통과하는 모든
// 요소를 모아 새로운 배열로 변환

//const words = [
// "신재민짱짱",
// "세종대왕",
// "이황",
// "강감찬",
// "신사임당",
// "이순신",
//];

// 글자길이가 3자를 초과하는 데이터만 추려서 새로운 배열 생성
//const result = words.filter((word) => {
//return word.length > 3;
//});
//console.log(result);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let result = arr1.concat(arr2, arr3);
// let result1 = [...arr1, ...arr2, ...arr3];
// console.log(result);
// console.log(result1);

// let obj1 = {
//   a: "1",
//   b: "2",
// };

// let obj2 = {
//   c: "3",
//   d: "4",
// };
// result3 = { ...obj1, ...obj2 };
// console.log(result3);

// 구조분해할당(ES6, Destructuring)
// 이 방식을 사용하는 이유는.. 코드가 간결해지기 때문에
// 객체나 배열의 속성을 분해해서 개별변수에 담을 수 있게 해준다.

let obj = {
  name: "홍길동",
  age: 20,
  address: {
    zipcode: "123-456",
    city: "서울",
  },
};

let { name, age } = obj;

let {
  address: { zipcode, city },
} = obj;
