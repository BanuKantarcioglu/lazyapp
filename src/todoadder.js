import React, { Component } from 'react';

class ToDoAdder extends Component{
render(){
  return(
      <div>
        <input
          placeholder="add something new today"
          value={this.props.newtodo}
          onChange={(e)=>  this.props.onEntryChanged(e.target.value)}
          onFocus={(e)=>  this.props.onEntryChanged(e.target.value)}/>
        <button
          onClick={this.props.onAddClicked}> Ekle</button>
      </div>
    );
  }
}

export default ToDoAdder;
