import React, { Component } from 'react';

export default class EditableToDo extends Component{
render(){
  const props=this.props;

  return(
      <span>
        <input
          autoFocus
          value = {props.temptodo}
          onChange={(e)=>  props.onToDoChange(e.target.value)}
          />
        <button onClick={props.onUpdate}><img src="/img/edit.png" alt="edit"/> </button>
        <button onClick={props.onDelete}><img src="/img/trash.png" alt="remove"/> </button>
      </span>
    );
  }
}
