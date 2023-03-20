let num1 = 100; //전역변수1
let num2 = 50; //전역변수2

function f1() {
  console.log(num1); //100(스코프)
  function f11() {
    let num2 = 100; //지역변수1
    console.log(num1, num2); //100, 100(스코프)
  }
}

function f2() {
  num1 = 250; //250(전역변수 num1이 100에서 250으로 바뀜)
}

function f3() {
  let num1 = 100; //지역변수1
  let num3 = 50; //지역변수2
  num1 = 300; //지역변수3
  console.log(num1); //300
}

console.log(num1); //100(전역변수 값)
f1(); //100, 100, 100(f1함수의 결과값)
f2(); //값의 변경만 일어남.
console.log(num1); //100(전역변수 값)
f3(); //300(f3함수의 결과값)
console.log(num1); //250(f2함수에서 바뀐 전역변수 값)
console.log(num3); //정의되어 있지 않음.

/*스코프 체인을 완벽하게 이해해야한다.*/
