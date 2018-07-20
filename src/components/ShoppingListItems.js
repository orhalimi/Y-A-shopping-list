import React from 'react';
import '../css/ShoppingListItems.css'


const generateShoppingListItems = props => (
  props.shoppingList.map(item => {
    const className = `shopping-list-items__list-item ${item.checked?`shopping-list-items__list-item--checked`: ``}`;
     return (
      <div className={className} key={item.id}>
        <input type="checkbox" defaultChecked={item.checked} onClick={props.handleCheckbox(item.id)}/>
        <span onClick={props.handleItemClick(item.id)}>{item.name}</span>
        <button className="button--link-style" onClick={props.handleDelete(item.id)}>X</button>
      </div>)
  })
)



  const ShoppingListItems = props => {
    const items = props.shoppingList && props.shoppingList.length > 0? generateShoppingListItems(props): []
    return (
      <div className="container__box shopping-list-item border--light-gray">
        <div className="container__box-header gradient--green">
          <h2 className="color--white">ADD YOUR ITEMS HERE</h2>
        </div>
        <div className="shopping-list-items__list">
          {items}
        </div>
      </div>
    )

}

export default ShoppingListItems;