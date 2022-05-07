// 0을 NaN, Infinity, false, true, null, undefined 값과 더하면 어떤 일이 일어날까?
// 빈문자열을 NaN, Infinity, false, true, null, undefined 값과 연결하면 어떤 일이 일어날까?
// 먼저 결과를 추측해본 다음, 코드로 결과를 확인해보자.

let testVal

testVal = 0
console.log(`0 + Nan = ${testVal + NaN}`)
console.log(`0 + Infinity = ${testVal + Infinity}`)
console.log(`0 + false = ${testVal + false}`)
console.log(`0 + true = ${testVal + true}`)
console.log(`0 + null = ${testVal + null}`)
console.log(`0 + undefined = ${testVal + undefined}`)

testVal = ''
console.log(`'' + Nan = ${testVal + NaN}`)
console.log(`'' + Infinity = ${testVal + Infinity}`)
console.log(`'' + false = ${testVal + false}`)
console.log(`'' + true = ${testVal + true}`)
console.log(`'' + null = ${testVal + null}`)
console.log(`'' + undefined = ${testVal + undefined}`)

// output
// 0 + Nan = NaN
// 0 + Infinity = Infinity
// 0 + false = 0
// 0 + true = 1
// 0 + null = 0
// 0 + undefined = NaN
// '' + Nan = NaN
// '' + Infinity = Infinity
// '' + false = false
// '' + true = true
// '' + null = null
// '' + undefined = undefined

// REPL
// > 0 + NaN
// NaN
// > 0 + Infinity
// Infinity
// > 0 + false
// 0
// > 0 + true
// 1
// > 0 + null
// 0
// > 0 + undefined
// NaN
// > '' + NaN
// 'NaN'
// > '' + Infinity
// 'Infinity'
// > '' + false
// 'false'
// > '' + true
// 'true'
// > '' + null
// 'null'
// > '' + undefined
// 'undefined'
// >