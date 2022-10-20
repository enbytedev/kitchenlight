import kitchenlight from "../index.js";

function applyToConsole() {
    const gCounter = kitchenlight.counter("ConsoleCounter");
    console.tick = function(context) { gCounter.tick(context, 3) }
    console.take = function(context) { gCounter.take(context, 3) }
    console.peek = function(item) { kitchenlight.peek(item, 4) }
    console.watch = function(target, title) { return kitchenlight.watch(target, title, 4) }
}

export default applyToConsole;