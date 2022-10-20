import confectionery from 'confectionery';
import { replaceRegex } from 'sugarcube';

function peek(item, layer) {
    let stackLayer = 3;
    if (layer != undefined) { stackLayer = layer };
    let location = ((new Error().stack).split("at ")[stackLayer]).trim();

    if (typeof item === "object") {
        objectHandler(item, location, item.constructor.name);
    }
    if (typeof item === "string") {
        objectHandler(JSON.parse(item), location, "JSON");
    }

}

function objectHandler(item, location, type) {
    let itemString = JSON.stringify(item, null, 4);
    itemString = replaceRegex(itemString, '', '{', '}', '"');
    itemString = replaceRegex(itemString, '\\n{bold ┇} ', '\n');
    itemString = '{bold ┇} ' + itemString;
    writePeek(type, location, itemString);
}

function writePeek(itemType, callLocation, itemString) {
    confectionery.customPrint(() => { return `┏━━━━━ 🔍 {bold {magenta PEEK}} ━━━━━━━━\\n┃ {bold {green ◯ ${itemType}}\\n{white ┃} {gray requested} @ ${callLocation}\\n${itemString}\\n{white ┗}}\\n` });
}

export default peek;