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
        <input type="number" min="1" max="99" key={quantity} id="quantity" defaultValue={quantity} onBlur={props.handleOutsideItemDetailsFormClick}/>
        <label htmlFor="price">Price</label>  
        <input type="number" min="0" step=".01" max="1000000" pattern="^\d+(?:\.\d{1,2})?$" key={price} id="price" defaultValue={price} onBlur={props.handleOutsideItemDetailsFormClick}/>
        <label htmlFor="description">Description</label>  
        <textarea rows="3" key={description} id="description" defaultValue={description} onBlur={props.handleOutsideItemDetailsFormClick}/>
      </div>
     
    </div>
  )

}


export default ShoppingListDetails;