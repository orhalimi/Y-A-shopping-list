import React from 'react';
import '../css/ShoppingListItems.css'


export const NEW_ITEM = "new";

const generateShoppingListItem = (item, props) => {
    const className = `shopping-list-items__list-item ${item.checked?`shopping-list-items__list-item--checked`: ``}`;
    let itemNameElement;
    if (item.id === props.editedItemId) {
      itemNameElement =  
      <
        input 
        type="text" 
        autoFocus 
        defaultValue={item.name} 
        onBlur={props.handleOutsideItemClick(item.id)} 
      />;
    } else {
      itemNameElement = <span onClick={props.handleItemClick(item.id)}>{item.name}</span>;
    }
    
    if (item.id === NEW_ITEM) {
      return (
        <div className={className} key={item.id}>
          {itemNameElement}
        </div>)
    }

     return (
      <div className={className} key={item.id}>
        <input type="checkbox" defaultChecked={item.checked} onClick={props.handleCheckbox(item.id)}/>
        {itemNameElement}
        <button className="button--link-style" onClick={props.handleDelete(item.id)}>X</button>
      </div>)
}


  const ShoppingListItems = props => {
    const addItemTamplate = {
        id:"new",
        name: "Add Item",
    }
    const items = props.shoppingList && props.shoppingList.length > 0? 
      props.shoppingList.map(item => (generateShoppingListItem(item, props))): [];
    const addNewItem = generateShoppingListItem(addItemTamplate, props)

    return (
      <div className="container__box shopping-list-item border--light-gray">
        <div className="container__box-header gradient--green">
          <h2 className="color--white">ADD YOUR ITEMS HERE</h2>
        </div>
        <div className="shopping-list-items__list">
          {items}
          {addNewItem}
        </div>
      </div>
    )

}

export default ShoppingListItems;