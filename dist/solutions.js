"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem 1
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
// Problem 2
function reverseString(str) {
    return str.split("").reverse().join("");
}
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}
// Problem 4
function getProperty(obj, key) {
    return obj[key];
}
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
}
// Problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
// Problem 7
function getIntersection(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value));
}
//# sourceMappingURL=solutions.js.map