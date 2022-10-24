<p align="center">
  <a><img src="https://github.com/enbytedev/kitchenlight/blob/main/ICON.png" width="250" height="250" /></a>

  <h3 align="center">✨ kitchen light ✨</h3>
 <p align="center"><i>a small developer tool to help you debug everything but the kitchen sink</i></p>
</p>
  <p align="center">
    <a href="https://github.com/enbytedev/kitchenlight">
      <img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/enbytedev/kitchenlight?style=for-the-badge">
    </a>
    <a href="https://github.com/enbytedev/kitchenlight/blob/main/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/enbytedev/kitchenlight?style=for-the-badge&color=AA4A44" />
    </a>
  <hr>
</p>

```
npm i -D kitchenlight
```

### Aliases
As long as the package is imported, aliases can be added to the console object. These include: console.tick, console.take, console.peek, console.watch! The counter for console is shared wherever it's used.

Apply it with: `kitchenlight.applyToConsole();`

To enable TypeScript support, add the following to your project's `d.ts`:
```ts
interface Console {
    tick: any,
    take: any,
    peek: any,
    watch: any,
}
```

### Counter
To create a counter instance: `const debugCounter = kitchenlight.counter("Debug_Counter");`

**By making counter instances, it is easier to share them across files and see what parts of your code are being reached.**

Example:
```js
const counter1 = kitchenlight.counter("counter1");
const counter2 = kitchenlight.counter("counter2");

counter1.tick("Incrementing the counter. This field is optional.");
counter2.tick();

counter1.take("Decrementing the counter. This field is optional.");
```
Result:

<a><img src="https://github.com/enbytedev/kitchenlight/blob/main/img/counter.png" width="621" height="204" /></a>

### Watch
To watch a function, enter it in via `const function = kitchenlight.watch(function, "Watching The Function");`

This will create a wrapper and alert stdout on each invocation.
Example:
```js
function hello(arg) {
    console.log("Hello", arg);
}

hello = console.watch(hello, "Hello Function");

hello("World")
```
Result:

<a><img src="https://github.com/enbytedev/kitchenlight/blob/main/img/watch.png" width="727" height="78" /></a>

### Peek
Peek allows a quick look at object and JSON strings. `kitchenlight.peek(object);`

Example: 
```js
let obj = {
    name: "John",
    age: 20,
    dog: {
        name: "Jimmy",
        age: 4
    }
}

kitchenlight.peek(obj);
```
Result:

<a><img src="https://github.com/enbytedev/kitchenlight/blob/main/img/peek.png" width="604" height="210" /></a>