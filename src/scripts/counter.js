import confectionery from 'confectionery';

export default class Counter {
    constructor(name) {
        this.name = name;
        this.logger = createLogger(name);
        this.currentTick = 0;
    }

    tick(contextArg, layer) {
        let stackLayer = 2;
        if (layer != undefined) { stackLayer = layer };

        this.currentTick++;
        let context = "";
        if (contextArg !== undefined) { context = "; " + contextArg };
        let location = ((new Error().stack).split("at ")[stackLayer]).trim();
        this.logger.info(`┃ {bold {green ${this.currentTick}}${context}\\n{white ┃} {gray ${this.name}} @ ${location}\\n{white ┗}}`);
    }

    take(contextArg, layer) {
        let stackLayer = 2;
        if (layer != undefined) { stackLayer = layer };

        this.currentTick--;
        let context = "";
        if (contextArg !== undefined) { context = "; " + contextArg };
        let location = ((new Error().stack).split("at ")[stackLayer]).trim();
        this.logger.warn(`┃ {bold {red ${this.currentTick}}${context} \\n{white ┃} {gray ${this.name}} @ ${location}\\n{white ┗}}`);
    }
};

export const kitchenlight = {
    debug: function handle(moment, context, line) { return `\n` },
    info: function handle(moment, context, line) { return `┏━━━━━ 💡 {bold {green TICK}} ━━━━━━━━\\n${line}\n` },
    warn: function handle(moment, context, line) { return `┏━━━━━ 💡 {bold {red TAKE}} ━━━━━━━━\\n${line}\n` },
    error: function handle(moment, context, line) { return `\n` }
}

function createLogger(name) {
    const logger = confectionery.createLogger('kitchenlight_' + name);
    logger.setFormat(kitchenlight);
    return logger;
}