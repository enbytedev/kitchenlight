import counter from './scripts/counter.js';

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
}

export default kitchenlight;