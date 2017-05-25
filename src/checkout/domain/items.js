'use strict';

let list = [
    {name: "Sal 0.5", price: 0.5},
    {name: "Aceite 3", price: 3},
    {name: "Vino 10", price: 10}
];
const map = {};
list.forEach((item, index) => {
    map[item.name] = index;
});

function get(itemName) {
    return list[map[itemName]];
}

function copyItem(item) {
    return JSON.parse(JSON.stringify(item));
}

module.exports = {
    copyItem: copyItem,
    get: get
};
