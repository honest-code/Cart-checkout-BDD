'use strict';

let list = [
    {name: 'Sal', price: 1.43},
    {name: 'Aceite', price: 5.23},
    {name: 'Vino', price: 10}
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
