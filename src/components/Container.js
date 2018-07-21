import React, { Component } from 'react';
import '../css/Container.css';
import ShoppingListItems, {NEW_ITEM} from './ShoppingListItems';
import ShoppingListDetails from './ShoppingListDetails';
import * as serverMock from '../serverMock';

export default class Container extends Component {

  constructor (props) {

    super(props)
    this.state = {
      shoppingList: [],
      itemDetailsvisibility: false,
      viewedItemId: null,
      editedItemId: null,
    }
  }

  componentDidMount() {
    const shoppingList = serverMock.getListItem();
    console.log(shoppingList);
    this.setState({shoppingList});
  }

  handleDelete = (id) => (e) =>{
    e.preventDefault();
    const updatedShoppingList = serverMock.deleteListItem(id);
    this.setState({shoppingList:updatedShoppingList});
  }

  getShoppingListItemById = (id) => (this.state.shoppingList.filter(item => item.id === id)[0] || {})

  handleCheckbox = (id) => (e) =>{
    const updatedItem = this.getShoppingListItemById(id);
    updatedItem.checked = !updatedItem.checked;
    const updatedShoppingList = serverMock.updateListItem(updatedItem);
    this.setState({shoppingList:updatedShoppingList});
  }
  
  handleItemClick = (id) => (e) => {
    this.setState({itemDetailsvisibility:true, viewedItemId:id, editedItemId:id});
  }

  handleOutsideItemClick = (id) => (e) => {
    const updatedState = {editedItemId:null}
    if (e.target.value) {
      if (id === NEW_ITEM) {
        const name = e.target.value;
        updatedState.shoppingList = serverMock.addListItem(name);
      } else {
        const updatedItem = this.getShoppingListItemById(id);
        updatedItem.name = e.target.value;
        updatedState.shoppingList = serverMock.updateListItem(updatedItem);
      }
    }
    this.setState(updatedState);
  }

  handleItemNameChange = (id) => (e) => {
    let updatedShoppingList;
    if (id === NEW_ITEM) {
      console.log("yyyy")
      const name = e.target.value;
      updatedShoppingList = serverMock.addListItem(name);
    }
    else { 
      const updatedItem = this.getShoppingListItemById(id);
      updatedItem.name = e.target.value;
      updatedShoppingList = serverMock.updateListItem(updatedItem);
    }
    this.setState({shoppingList:updatedShoppingList});
  }

  render () {
    const viewedItemDetails = this.getShoppingListItemById(this.state.viewedItemId) 
    return (
      <section className="container">
        <
          ShoppingListItems 
          shoppingList={this.state.shoppingList}
          handleDelete={this.handleDelete}
          handleCheckbox={this.handleCheckbox}
          handleItemClick={this.handleItemClick}
          handleOutsideItemClick={this.handleOutsideItemClick}
          handleItemNameChange={this.handleItemNameChange}
          editedItemId={this.state.editedItemId}
        />
        <ShoppingListDetails visibility={this.state.itemDetailsvisibility} item={viewedItemDetails}/>
      </section>
    )
  }
}