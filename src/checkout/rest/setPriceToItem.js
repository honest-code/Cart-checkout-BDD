'use strict';

const items = require('../domain/items');

module.exports = function(req, res, next) {
    //let id = req.params.checkoutId;
    let itemName = req.params.itemName;
    let itemPrice = req.params.itemPrice;
    // let checkout = checkouts.addItem(id, itemName);
    // if (checkout === undefined) {
    //     res.send(404);
    // } else {
    //     res.send(200, checkout);
    // }

    const item = items.get(itemName);
    if(item) {
        item.price = itemPrice;
    }

    res.send(200);

    return next();

};