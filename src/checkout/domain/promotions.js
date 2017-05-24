'use strict';

let promotions = {
    '2x1': towForOne
};

function towForOne(checkout) {
    checkout.total = checkout.list.reduce((total, item) => {
        return Math.ceil(item.amount / 2) * item.price;
    }, 0);
    return checkout;
}

module.exports = {
    promotions: promotions
};