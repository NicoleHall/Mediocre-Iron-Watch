import React from 'react'
import CartItem from './CartItem'
//container component, takes the array as a prop
const CartItems = ({arrOfItems}) => {

  // let itemsList = arrOfItems.map( (cartItem)=> <CartItem key={cartItem.id} product={cartItem.product.name} price={cartItem.product.priceInCents} quantity={cartItem.quantity} />)

  let itemsList = arrOfItems.map( (cartItem)=> <CartItem key={cartItem.id} cartItem={ cartItem.product } quantity={cartItem.quantity}/>)

  return(
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
          </div>
        </div>
        <div> { itemsList } </div>
      </div>
    </div>
  )
}

export default CartItems;
