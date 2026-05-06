Title: Why any is Dangerous and unknown is Safer in TypeScript
Introduction

TypeScript provides powerful type safety, but using any can completely break it. Developers often misuse any when dealing with unpredictable data, but unknown is a much safer alternative.

The Problem with any

The any type disables type checking completely.

let value: any = "Hello";
value = 10;
value.toUpperCase(); // No error, but unsafe

Here, TypeScript allows everything—even incorrect operations.

Why unknown is Safer

unknown forces you to check the type before using it.

let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

This prevents runtime errors.

Type Narrowing

Type narrowing means reducing a broad type into a specific one using checks.

function checkType(value: string | number) {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

TypeScript understands the type inside each block.

Conclusion

Avoid any whenever possible. Use unknown with type narrowing to maintain safety and reliability in your code.
