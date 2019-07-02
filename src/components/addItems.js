import React, { Component } from 'react';

class AddItems extends Component {
    state = {};

    onSubmit = (e) => {
        e.preventDefault();
       let productMatch = this.props.products.find(x => {
           return x.name === this.state.product
        });
       let result = {
           id: this.props.items.length + 1,
           product: productMatch,
           quantity: this.state.quantity

       };
       this.props.onAddItem(result)
    };

    render() {
        let productList = this.props.products.map( product => {
            return (
                <option key={product.id} value={product.name}>{product.name}</option>
            )
        });
        return (
            <div className='container pt-2 pb-4'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor="quantity">Quantity</label>
                        <br/>
                        <input type="number" name="quantity" min='0' required onChange={(e) => this.setState({quantity: e.target.value})}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="product">Products</label>
                        <br/>
                        <select name='product' value={this.state.product} onChange={(e) => this.setState({ product: e.target.value })}>
                            {productList}
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddItems;
