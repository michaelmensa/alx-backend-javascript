# ES6 PROMISE

### Promises
Promises are a feature in JavaScript introduced in ES6 to handle asynchronous operations. They represent a value that might be available now, or in the future, or never. Promises provide a cleaner and more structured way to work with asynchronous code compared to callbacks.

### How to use `then`, `resolve`, `catch` methods
- **`then` Method:** Used to handle the fulfillment of a promise. It takes two optional callback functions: one for success and one for failure.
  ```javascript
  promise.then(onFulfilled, onRejected);
  ```
- **`resolve` Method:** Used inside a promise executor function to fulfill the promise with a given value.
  ```javascript
  new Promise((resolve, reject) => {
    // ... async operation
    resolve(result);
  });
  ```
- **`catch` Method:** Used to handle promise rejection. It is similar to providing a rejection callback in the `then` method.
  ```javascript
  promise.catch(onRejected);
  ```

### How to use every method of the Promise object
- **`Promise.all(iterable)`:** Returns a promise that fulfills when all promises in the iterable argument have fulfilled.
- **`Promise.race(iterable)`:** Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects.
- **`Promise.resolve(value)`:** Returns a resolved promise with the given value.
- **`Promise.reject(reason)`:** Returns a rejected promise with the given reason.

### Throw / Try
The `throw` statement is used to throw an exception. In the context of promises, throwing an error inside a `then` block will reject the promise, and it can be caught using the `catch` method.

### The `await` operator
The `await` operator is used inside an `async` function to pause the execution of the function until the promise is fulfilled, and it returns the fulfilled value.

### How to use an async function
An async function is a function declared with the `async` keyword. It always returns a promise and allows the use of the `await` operator to handle promises more cleanly.
```javascript
async function myAsyncFunction() {
  const result = await somePromise;
  // ... rest of the code
}
```
