const calcNum = (...args) => {

    return args.reduce((acc, item) => acc + item)
}

console.log(calcNum(1, 2, 3, 4, 5, 6))

const calcNum2 = function (num1, num2, num3) {

    return num1 + num2 + num3
}

const numbers = [1, 2, 3]

console.log(calcNum2(...numbers))