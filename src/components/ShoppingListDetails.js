import React from 'react';

import '../css/ShoppingListDetails.css'


const ShoppingListDetails = props => {

  if (!props.visibility) {
    return [];
  }

  const {name="", quantity=1, price=0, description=''} = props.item;

  return (
    <div className="container__box shopping-list-details border--light-gray">
      <div className="container__box-header gradient--green">
        <h2 className="color--white">{`${name.toUpperCase()} DETAILS`}</h2>
      </div>
      <div className="shopping-list-details__body">
        <label htmlFor="quantity">Quantity</label>  
        <input type="text" id="quantity" value={quantity}/>
        <label htmlFor="price">Price</label>  
        <input type="text" id="price" value={price}/>
        <label htmlFor="description">Description</label>  
        <textarea rows="3" id="description" textarea value={description}/>
      </div>
     
    </div>
  )

}


export default ShoppingListDetails;