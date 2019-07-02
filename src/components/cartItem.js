import React from 'react';

const CartItem = ({item}) => {
    let dollars = item.product['priceInCents'] / 100;
    dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return (
        <div className="list-group-item">
            <div className="row">
                    <div className="col-md-8">{item.product['name']}</div>
                    <div className="col-md-2">${dollars}</div>
                    <div className="col-md-2">{item.quantity}</div>
            </div>
        </div>
    );
};

export default CartItem;
