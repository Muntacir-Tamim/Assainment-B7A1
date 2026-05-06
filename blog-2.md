# `Pick` and `Omit`: Keeping Your TypeScript Code DRY

## Introduction

In large TypeScript projects, it's common to have a master interface that describes a full data model — for example, a `User` with dozens of properties. But different parts of your application need different "slices" of that model. A registration form needs only `name` and `email`. An admin dashboard needs everything except the `password`. If you manually copy and redefine interfaces for each use case, you violate the **DRY principle** (Don't Repeat Yourself) — and every time the master interface changes, you must update every copy.

TypeScript's built-in **`Pick`** and **`Omit`** utility types solve this elegantly.

---

## The Problem: Interface Duplication

Imagine this master interface:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
}
```

Without utility types, you might write separate interfaces like this:

```typescript
// For the registration form
interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

// For the public profile
interface PublicProfile {
  id: number;
  name: string;
  role: "admin" | "user";
}
```

Now if you rename `name` to `fullName` in `User`, you must also update `RegistrationData` and `PublicProfile` manually. This is fragile and error-prone.

---

## `Pick`: Choose Only What You Need

`Pick<Type, Keys>` creates a new type by **selecting** specific keys from an existing type.

```typescript
type RegistrationData = Pick<User, "name" | "email" | "password">;

// Equivalent to:
// {
//   name: string;
//   email: string;
//   password: string;
// }
```

Now `RegistrationData` is always derived from `User`. If `User` changes, `RegistrationData` automatically reflects that change.

```typescript
type PublicProfile = Pick<User, "id" | "name" | "role">;

function displayProfile(profile: PublicProfile): void {
  console.log(`${profile.name} — ${profile.role}`);
}
```

---

## `Omit`: Exclude What You Don't Want

`Omit<Type, Keys>` does the opposite — it creates a new type by **removing** specific keys from an existing type.

```typescript
type SafeUser = Omit<User, "password">;

// Equivalent to:
// {
//   id: number;
//   name: string;
//   email: string;
//   role: "admin" | "user";
//   createdAt: Date;
// }
```

This is perfect for API responses where you want to send back everything about a user **except** sensitive fields.

```typescript
function getUserForClient(user: User): SafeUser {
  const { password, ...safeUser } = user;
  return safeUser;
}
```

---

## Combining `Pick` and `Omit` with Other Utilities

You can compose these utility types with others like `Partial` or `Required` for even more flexibility:

```typescript
// A type for updating a user — all fields optional except id
type UserUpdate = Partial<Omit<User, "id" | "createdAt">>;

// A type for creating a user — no id or createdAt (those are auto-generated)
type CreateUserInput = Omit<User, "id" | "createdAt">;
```

This means your entire type system is built from **one source of truth**: the master `User` interface.

---

## DRY Benefits at a Glance

| Without Utility Types | With `Pick` / `Omit` |
|---|---|
| Multiple manually written interfaces | One master interface + derived types |
| Update multiple files on any change | Update one place; derived types follow |
| Risk of interfaces going out of sync | Derived types are always consistent |
| More code to read and maintain | Less code, more expressive intent |

---

## Conclusion

`Pick` and `Omit` are among the most practical tools in TypeScript's utility type toolkit. They let you derive specialized "slices" of a master interface without copying or duplicating code. When your master interface changes, all derived types stay in sync automatically. This is the DRY principle in action: one source of truth, zero redundancy. Use these utility types whenever you find yourself writing a new interface that looks almost like one you already have.
