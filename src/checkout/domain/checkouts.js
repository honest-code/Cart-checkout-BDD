'use strict';

const items = require('./items');
const promotions = require('./promotions').promotions;

let checkoutMap = {};


function create(id) {
    checkoutMap[id] = {
        list: [],
        total:  0,
        currency: 'EUR',
        promotions: []
    };

    return checkoutMap[id];
}

function retrieve(id) {
    return checkoutMap[id];
}

function clear() {
    checkoutMap = {};
}

function addItem(id, itemName){
    const item = items.get(itemName);

    let checkout = checkoutMap[id];
    if(checkout && item){
        const itemInCout = checkout.list.find(item => item.name === itemName);
        if(itemInCout) {
            itemInCout.amount++;
        } else {
            push(checkoutMap[id], item);
        }
        checkout.total += item.price;
        checkout = applyPromotions(checkout);



    }
    return checkout;
}

function applyPromotions(checkout) {
    checkout.promotions.forEach(promotion => {
        promotions[promotion](checkout);
    });
    return checkout;
}

function push(checkout, item) {
    const itemForAdd = items.copyItem(item);
    itemForAdd.amount = 1;
    checkout.list.push(itemForAdd);
}

function addPromotion(id, promotionName){
    const callback = promotions[promotionName];
    if(checkoutMap[id] && callback !== undefined){
        checkoutMap[id].promotions.push(promotionName);
        callback(checkoutMap[id]);
    }
    return checkoutMap[id];
}

module.exports = {
    create: create,
    retrieve: retrieve,
    clear: clear,
    addItem: addItem,
    addPromotion: addPromotion,
};
