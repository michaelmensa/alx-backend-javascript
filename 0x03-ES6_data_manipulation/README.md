# ES6 Data Manipulation

## Learning Objectives

Upon completing this project, you will have acquired the following knowledge and skills:

### 1. Map, Filter, and Reduce on Arrays

#### Map
- **Definition:** `map` is a method in JavaScript that creates a new array by applying a provided function to each element of the existing array.
- **Usage:** Use `map` to transform each element of an array and generate a new array with the results.

  ```javascript
  const originalArray = [1, 2, 3];
  const newArray = originalArray.map((element) => element * 2);
  // Result: [2, 4, 6]
  ```

#### Filter
- **Definition:** `filter` is a method that creates a new array with elements that satisfy a given condition.
- **Usage:** Use `filter` to selectively include elements in a new array based on a specified criterion.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  // Result: [2, 4]
  ```

#### Reduce
- **Definition:** `reduce` is a method that applies a function to each element of an array to reduce it to a single value.
- **Usage:** Use `reduce` for operations where you need to accumulate values into a single result.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  // Result: 10
  ```

### 2. Typed Arrays

- **Definition:** Typed arrays are a way to work with binary data in a structured manner. They provide a view over raw binary data in memory.
- **Usage:** Utilize typed arrays when dealing with low-level binary data, such as manipulating images, audio, or other binary file formats.

  ```javascript
  const buffer = new ArrayBuffer(16);
  const intArray = new Int32Array(buffer);
  intArray[0] = 42;
  // Now the buffer contains binary data representing the integer 42.
  ```

### 3. Set, Map, and WeakLink Data Structures

#### Set
- **Definition:** `Set` is a built-in object in JavaScript that allows you to store unique values.
- **Usage:** Use `Set` when you need to maintain a collection of distinct values without duplicates.

  ```javascript
  const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
  // Result: Set {1, 2, 3}
  ```

#### Map
- **Definition:** `Map` is a built-in object that allows you to store key-value pairs.
- **Usage:** Use `Map` when you need to associate values with unique keys.

  ```javascript
  const userRoles = new Map();
  userRoles.set('John', 'Admin');
  userRoles.set('Jane', 'User');
  // Result: Map { 'John' => 'Admin', 'Jane' => 'User' }
  ```

#### WeakLink
- **Definition:** `WeakMap` and `WeakSet` are similar to `Map` and `Set`, but they allow their keys to be garbage collected if there are no other references to them.
- **Usage:** Use `WeakMap` and `WeakSet` when you want to associate data with an object without preventing the object from being garbage collected.

  ```javascript
  const weakMap = new WeakMap();
  const key = { id: 1 };
  weakMap.set(key, 'Value');
  // The entry in the WeakMap won't prevent the key from being garbage collected.
  ```

By mastering these concepts, you will enhance your ability to perform efficient and powerful data manipulation in JavaScript using ES6 features.
