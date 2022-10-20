import applyToConsole from './scripts/applyToConsole.js';
import counter from './scripts/counter.js';
import peek from './scripts/peek.js';
import watch from './scripts/watch.js';
const regex = new RegExp(/^[A-Za-z0-9_.]+$/);

/**
 * kitchenlight
 * @module kitchenlight
 */
const kitchenlight = {
    /**
     * Create a counter instance
     * @param {string} name The name of the counter instance.
     * @returns {counter} Returns a new counter instance.
     */
    counter: (name) => {
        if (regex.test(name) && name !== undefined) {
            return new counter(name);
        } else {
            throw new Error('Invalid counter name!');
        }
    },
    peek: (item, layer) => {
        if (item !== undefined) {
            return peek(item, layer);
        } else {
            throw new Error('Invalid item!');
        }
    },
    watch: (target, title) => {
        if (typeof target !== "function") { throw new Error('Invalid target!');}
        return new Proxy(target, watch(target, title));
    }
}

export default kitchenlight;

applyToConsole();