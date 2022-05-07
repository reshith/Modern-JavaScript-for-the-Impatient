// 04. angle은 두 개의 각도를 더하거나 뺀 결과다. angle을 0 이상 360 미만의 수로 졍규화하려면 연산자 %를 이용해 어떻게 구현해야 할까?

let angle
let modNum

angle = 0
modNum = 360
console.log(`${angle} % ${modNum} = ${angle % modNum}`)

angle = 0.1
modNum = 360
console.log(`${angle} % ${modNum} = ${angle % modNum}`)

angle = 1
modNum = 360
console.log(`${angle} % ${modNum} = ${angle % modNum}`)

angle = 359
modNum = 360
console.log(`${angle} % ${modNum} = ${angle % modNum}`)

angle = 359.9
modNum = 360
console.log(`${angle} % ${modNum} = ${angle % modNum}`)

angle = 360
modNum = 360
console.log(`${angle} % ${modNum} = ${angle % modNum}`)

// output
// 0 % 360 = 0
// 0.1 % 360 = 0.1
// 1 % 360 = 1
// 359 % 360 = 359
// 359.9 % 360 = 359.9
// 360 % 360 = 0