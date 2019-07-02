import React from 'react';
import CartItem from './cartItem.js'

const CartItems = ({items}) => {
    let itemList = items.map(item => <CartItem key={item.id} item={item}/>);
    let sum = 0;
    for (let i = 0; i < itemList.length; i++){
        sum += itemList[i].props.item.quantity * itemList[i].props.item.product.priceInCents
    }
    let inDollars = sum / 100;
    inDollars.toLocaleString("en-US", {style:"currency", currency:"USD"});


    console.log("prices ", sum);


        return  (
            <div className="container">
            <h1 className='pt-3'>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {itemList}
            </div>
                <div className='py-3 '>
                    Total Cost: ${inDollars}
                </div>
            </div>
        )
};

export default CartItems;
