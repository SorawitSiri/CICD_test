class Calculator {
    plus(x, y) {
        return x + y
    }

    minus(x, y) {
        return x - y
    }

    multiply(x, y) {
        return x * y
    }

    devide(x, y) {
        if (y == 0) return 0
        else return x / y
    }
}

const calculator = new Calculator
console.log(calculator.devide(2, 2))

exports.default = calculator
