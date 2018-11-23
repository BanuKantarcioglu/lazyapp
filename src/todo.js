import React, { Component } from 'react';
import EditableToDo from './editabletodo.js';

class ToDo extends Component{
render(){
  const props=this.props;

    const isEditable = false //props.isEditable;
    const toggle = props.toggle;
    const item = props.item;
    const current = props.current;
    const temptodo = props.temptodo;
    const history = item.histories && item.histories.map((item,index)=>{
              return(
                <li key={item.id}> {item.donedate}</li>
              );
            });
    if(isEditable)
      return (
        <li key={item.id}  className="todo" >

          <EditableToDo
            temptodo={temptodo}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
            onToDoChange={props.onToDoChange}
            />
        </li>);
    else
      if(toggle){
      return(
        <span>
          <li key={item.id}  className="todo"  onClick={()=>props.onClick(current)}>
            {item.text}
          </li>
          <ul>
            {history}
          </ul>
        </span>
        );
      }
      else{
        return(
          <li key={item.id}  className="todo"  onClick={()=>props.onClick(current)}>
            {item.text}
          </li>
        );
      }
    }
}

export default ToDo;
