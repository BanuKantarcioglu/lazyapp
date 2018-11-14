import React, { Component } from 'react';
import ToDo from './todo.js';

class ToDoList extends Component{
  render(){
    const props = this.props;
    const temptodo = props.current.todotext;
    const ind = props.current.index;
    const list = props.todolist;
    const listItems =  list.map((item,index)=>{
            return(
              (index === ind)
              ?
                 <ToDo
                    index={index}
                    key={item.id}
                    text={item.text}
                    isEditable={true}
                    temptodo ={temptodo}
                    onDelete={props.onDelete}
                    onUpdate={props.onUpdate}
                    onToDoChange={props.onToDoChange}/>
              :
                 <ToDo
                    index={index}
                    key={item.id}
                    text={item.text}
                    isEditable={false}
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
