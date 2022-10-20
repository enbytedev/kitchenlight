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

<a><img src="https://github.com/enbytedev/kitchenlight/blob/main/example.png" width="621" height="204" /></a>