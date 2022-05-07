// [] + [], {} + [], [] + {}, {} + {}, [] - {}, {} - []의 결과는 무엇일까?
// 명령줄로 표현식을 계산한 결과와 변수에 할당한 결과를 비교하고 그 이유를 설명해보자.

let testVal1
let testVal2

testVal1 = []
testVal2 = []
console.log(`[] + [] = ${testVal1 + testVal2}`)
testVal1 = {}
testVal2 = []
console.log(`{} + [] = ${testVal1 + testVal2}`)
testVal1 = []
testVal2 = {}
console.log(`[] + {} = ${testVal1 + testVal2}`)
testVal1 = {}
testVal2 = {}
console.log(`{} + {} = ${testVal1 + testVal2}`)
testVal1 = []
testVal2 = {}
console.log(`[] - {} = ${testVal1 - testVal2}`)
testVal1 = {}
testVal2 = []
console.log(`{} - [] = ${testVal1 - testVal2}`)

// output
// [] + [] = 
// {} + [] = [object Object]
// [] + {} = [object Object]
// {} + {} = [object Object][object Object]
// [] - {} = NaN
// {} - [] = NaN

// REPL
// > [] + []
// ''
// > {} + []
// '[object Object]'
// > [] + {}
// '[object Object]'
// > {} + {}
// '[object Object][object Object]'
// > [] - {}
// NaN
// > {} - []
// NaN
// >