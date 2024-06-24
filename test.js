class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2


// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const { add } = require('./add'); // assuming your function is exported from a file named 'add.js'

describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 5 + 7 to equal 12', () => {
        expect(add(5, 7)).toBe(12);
    });

    test('adds -1 + 2 to equal 1', () => {
        expect(add(-1, 2)).toBe(1);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
    });
});