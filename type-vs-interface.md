## TypeScript: Difference Between type and interface

In TypeScript, both type aliases and interface are used to define data structures and ensure type safety. However, they have some important differences.

## Core Differences

In TypeScript, Interface and Type Alias have several differences. Interface supports declaration merging, whereas Type Alias does not support declaration merging. Interface cannot directly define primitive types, union types, or tuple types, but Type Alias can define all of them. For object extension, Interface uses the extends keyword, while Type Alias uses the & (intersection) operator to combine types. Both Interface and Type Alias support class implementation using implements, and both can define object shapes.

## Declaration Merging
In TypeScript, Interface supports declaration merging, which means if we declare multiple interfaces with the same name, TypeScript automatically combines them into a single interface. For example, if we declare interface User { name: string; } and again declare interface User { age: number; }, TypeScript merges both declarations, so the User interface will contain both name and age properties. On the other hand, Type Alias does not support declaration merging. If we declare the same type alias more than once, TypeScript will throw a duplicate identifier error.

## Primitives and Union Types
In TypeScript, Interface cannot directly define primitive types, union types, or tuple types. It is mainly used to define object structures. On the other hand, Type Alias can define different kinds of types, including primitive types, union types, tuple types, and object types. For example, we can use type Name = string for a primitive type, type Status = "pending" | "success" | "error" for a union type, and type Coordinate = [number, number] for a tuple type.

## Extending and Composing
In TypeScript, Interface uses the extends keyword to inherit properties from another interface. For example, interface Animal { name: string; } and interface Dog extends Animal { bark(): void; }. Here, the Dog interface inherits the name property from the Animal interface and also has its own bark() method.

On the other hand, Type Alias uses the intersection operator (&) to combine multiple types. For example, type Animal = { name: string } and type Dog = Animal & { bark(): void }. Here, the Dog type combines the properties of Animal with its own bark() method.



## When Should I Use Each?

## Use interface when:
- Defining object structures.
- Defining class contracts using implements.
- Working with object-oriented programming.
- You need declaration merging.
- Defining reusable data structures.


## Use type when:
- Defining union types.
- Defining primitive types.
- Defining tuple types.
- Working with mapped types.
- Working with conditional types.
- Combining multiple types using intersections.