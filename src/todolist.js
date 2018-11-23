import React, { Component } from 'react';
import ToDo from './todo.js';

class ToDoList extends Component{
  render(){
    const props = this.props;
    const temptodo = props.current.todotext;
    const ind = props.current.index;
    const list = props.todolist;
    const listItems =  list.map((item,index)=>{
      // isEditable = true/false buradaydı
            return(
              (index === ind)
              ?
                 <ToDo
                    key={item.id}
                    current = {index}
                    item={item}
                    toggle = {true}
                    temptodo ={temptodo}
                    onDelete={props.onDelete}
                    onUpdate={props.onUpdate}
                    onToDoChange={props.onToDoChange}
                    onClick={props.onClick}/>
              :
                 <ToDo
                    key={item.id}
                    current = {index}
                    item={item}
                    toggle = {false}
                    onClick={props.onClick}/>
            );
          });
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default ToDoList;
