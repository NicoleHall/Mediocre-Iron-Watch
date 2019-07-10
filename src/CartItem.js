import React from 'react'

//lists them out
const CartItem = ({cartItem, quantity}) => {
  return(
    <div class="collection-item">
      <div class="row">
        <div class="col-md-8">{ cartItem.name }</div>
        <div class="col-md-2">{ cartItem.priceInCents / 100 }</div>
        <div class="col-md-2">{ quantity }</div>
      </div>
    </div>
  )
}

export default CartItem;
