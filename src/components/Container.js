import React, { Component } from 'react';
import '../css/Container.css';
import ShoppingListItems from './ShoppingListItems';
import ShoppingListDetails from './ShoppingListDetails';
import * as serverMock from '../serverMock';

export default class Container extends Component {

  constructor (props) {

    super(props)
    this.state = {
      shoppingList: [],
      itemDetailsvisibility: false,
      viewedItemId: null,
    }
  }

  componentDidMount() {
    serverMock.getListItem()
    .then(shoppingList => this.setState({shoppingList}));
  }

  handleDelete = (id) => (e) =>{
    e.preventDefault();
    serverMock.deleteListItem(id)
    .then(shoppingList => this.setState({shoppingList}))
  }

  handleCheckbox = (id) => (e) =>{
    const shoppingList = this.state.shoppingList
    const updatedItem = shoppingList.filter(item => item.id === id)[0];
    updatedItem.checked = !updatedItem.checked;
    serverMock.updateListItem(updatedItem)
    .then(shoppingList => this.setState({shoppingList}))
  }
  
  handleItemClick = (id) => (e) => {
    this.setState({itemDetailsvisibility:true, viewedItemId:id});
  }

  render () {
    const viewedItemDetails = this.state.viewedItemId? 
      this.state.shoppingList.filter(item => item.id === this.state.viewedItemId)[0] :
      null

    return (
      <section className="container">
        <
          ShoppingListItems 
          shoppingList={this.state.shoppingList}
          handleDelete={this.handleDelete}
          handleCheckbox={this.handleCheckbox}
          handleItemClick = {this.handleItemClick}
        />
        <ShoppingListDetails visibility={this.state.itemDetailsvisibility} item={viewedItemDetails}/>
      </section>
    )
  }
}