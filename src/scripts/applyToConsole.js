import kitchenlight from "../index.js";

function applyToConsole() {
    const gCounter = kitchenlight.counter("Global_Counter");
    console.tick = function(context) { gCounter.tick(context) }
    console.take = function(context) { gCounter.take(context) }
}

export default applyToConsole;