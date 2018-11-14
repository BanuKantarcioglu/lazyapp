import React, { Component } from 'react';
import EditableToDo from './editabletodo.js';

class ToDo extends Component{
render(){
  const props=this.props;

    const isEditable = props.isEditable;
    const text = props.text;
    const index= props.index;
    const temptodo = props.temptodo;
    if(isEditable)
      return (
        <li key={index}  className="todo" >

          <EditableToDo
            temptodo={temptodo}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
            onToDoChange={props.onToDoChange}/>
        </li>);
    else
      return(
          <li key={index}  className="todo"  onClick={()=>props.onClick(index)}>
          <span onClick={props.onDelete}></span>
            {text}
          </li>);

    }
}

export default ToDo;
