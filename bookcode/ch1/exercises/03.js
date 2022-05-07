// 자바, C++과 마찬가지로(지난 수 세기의 수학적 경험을 따르는 파이썬은 제외) n이 음수이면 n % 2는 -1이다.
// 피연산자 음수를 % 연산자에 사용했을 때 어떤 일이 일어나는지 확인하자.
// 정수와 부동소수점 수를 각각 분석해보자.

let testVal

testVal = -3
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.1
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.2
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.3
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.4
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.5
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.6
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.7
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.8
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -3.9
console.log(`${testVal} % 2 = ${testVal %2}`)

testVal = -4
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.1
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.2
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.3
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.4
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.5
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.6
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.7
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.8
console.log(`${testVal} % 2 = ${testVal %2}`)
testVal = -4.9
console.log(`${testVal} % 2 = ${testVal %2}`)

// output
// -3 % 2 = -1
// -3.1 % 2 = -1.1
// -3.2 % 2 = -1.2000000000000002
// -3.3 % 2 = -1.2999999999999998
// -3.4 % 2 = -1.4
// -3.5 % 2 = -1.5
// -3.6 % 2 = -1.6
// -3.7 % 2 = -1.7000000000000002
// -3.8 % 2 = -1.7999999999999998
// -3.9 % 2 = -1.9
// -4 % 2 = 0
// -4.1 % 2 = -0.09999999999999964
// -4.2 % 2 = -0.20000000000000018
// -4.3 % 2 = -0.2999999999999998
// -4.4 % 2 = -0.40000000000000036
// -4.5 % 2 = -0.5
// -4.6 % 2 = -0.5999999999999996
// -4.7 % 2 = -0.7000000000000002
// -4.8 % 2 = -0.7999999999999998
// -4.9 % 2 = -0.9000000000000004

// REPL
// > -3 % 2
// -1
// > -3.1 % 2
// -1.1
// > -3.2 % 2
// -1.2000000000000002
// > -3.3 % 2
// -1.2999999999999998
// > -3.4 % 2
// -1.4
// > -3.5 % 2
// -1.5
// > -3.6 % 2
// -1.6
// > -3.7 % 2
// -1.7000000000000002
// > -3.8 % 2
// -1.7999999999999998
// > -3.9 % 2
// -1.9
// > -4 % 2
// -0
// > -4.1 % 2
// -0.09999999999999964
// > -4.2 % 2
// -0.20000000000000018
// > -4.3 % 2
// -0.2999999999999998
// > -4.4 % 2
// -0.40000000000000036
// > -4.5 % 2
// -0.5
// > -4.6 % 2
// -0.5999999999999996
// > -4.7 % 2
// -0.7000000000000002
// > -4.8 % 2
// -0.7999999999999998
// > -4.9 % 2
// -0.9000000000000004
// >