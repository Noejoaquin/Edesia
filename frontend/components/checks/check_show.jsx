import React from 'react';
import { Route } from 'react-router-dom';

class CheckShow extends React.Component {
  constructor(props){
    super(props);
    this.check = this.props.check;
    this.fetchCheck = this.props.fetchCheck;
    this.tableId = this.props.tableId;
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount(){
    if (this.props.check && this.props.check.orderedItems === undefined){
      this.fetchCheck(this.props.check.id)
    }
  }

  handleCloseCheck(){
    this.closeCheck(id)
  }

  handleAddItem() {

  }

  render(){
    if (this.props.check === undefined){
      return null
    } else if (this.props.check.closed === true ){
      debugger
      return (
        <div id={status} key={this.props.check.id} className='check-index-item-show'>
          <li>
            {this.props.check.id}
          </li>
          <li>
            {this.props.check.tableId}
          </li>
          <li>
            {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
          </li>
            {this.props.check.orderedItems && this.props.check.orderedItems.length === 0 ? 'NO ITEMS ON THIS CHECK' : this.props.check.orderedItems}
          <li>
          </li>
        </div>
      )
    } else {
      return (
        <div id={status} key={this.props.check.id} className='check-index-item-show'>
          <li>
            {this.props.check.id}
          </li>
          <li>
            {this.props.check.tableId}
          </li>
          <li>
            {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
          </li>
            {this.props.check.orderedItems && this.props.check.orderedItems.length === 0 ? 'NO ITEMS ON THIS CHECK' : this.props.check.orderedItems}
          <li>
            <button onClick={this.handleAddItem}>Add Item</button>
          </li>
        </div>
      )
    }
  }
}


export default CheckShow;