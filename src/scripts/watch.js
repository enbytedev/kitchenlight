import confectionery from 'confectionery';

function watch(target, title) {
    if (typeof target === "function") {
        const wrapper = {
            apply: function(target, thisArg, argumentList) {
                called(title);
                return target.apply(thisArg, argumentList);
            },
        };
        return wrapper;
    }
}

function called(method, layer) {
    let stackLayer = 3;
    if (layer != undefined) { stackLayer = layer };
    let location = ((new Error().stack).split("at ")[stackLayer]).trim();
    confectionery.customPrint(() => { return `┏━━━━━ 🚨 {bold {red HIT }} ━━━━━━━━\\n┃ {bold {red ◯ ${method}} {gray requested @} ${location}\\n{white ┗}}\\n` });
}

export default watch;