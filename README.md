# B7A1 — Advanced Problem Solving with TypeScript & OOP

This repository contains my solutions for the TypeScript & OOP assignment, including all coding problems and blog posts.

---

## 📁 File Structure

```
├── solutions.ts   → All 7 coding solutions
├── blog-1.md      → Blog: any vs unknown & type narrowing
├── blog-2.md      → Blog: Pick & Omit utility types (DRY principle)
└── README.md      → This file
```

---

## 💻 Problem Solutions Overview

| Problem | Function / Class | Description |
|---------|-----------------|-------------|
| 1 | `filterEvenNumbers` | Returns only even numbers from an array |
| 2 | `reverseString` | Reverses a given string |
| 3 | `checkType` | Uses union types & type guards to identify string or number |
| 4 | `getProperty` | Generic function to safely access object properties |
| 5 | `toggleReadStatus` | Adds `isRead: true` to a `Book` object |
| 6 | `Person` / `Student` | Class inheritance with a `getDetails()` method |
| 7 | `getIntersection` | Returns elements common to both arrays |

---

## 📝 Blog Posts

### Blog 1 — `any` vs `unknown` & Type Narrowing
Explains why `any` is a type safety hole, how `unknown` enforces safe handling of unpredictable data, and demonstrates type narrowing with `typeof`, `instanceof`, and custom type guards.

### Blog 2 — `Pick` & `Omit` Utility Types (DRY Principle)
Explains how `Pick` and `Omit` let you create specialized type "slices" from a master interface without duplicating code, keeping your type system maintainable and consistent.

---

## 🚀 How to Run

```bash
# Install TypeScript (if not already installed)
npm install -g typescript

# Compile the solutions file
tsc solutions.ts

# Run the compiled output
node solutions.js
```
