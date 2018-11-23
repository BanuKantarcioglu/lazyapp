import React, { Component } from 'react';
import ToDoAdder from './todoadder.js';
import ToDoList from './todolist.js';
import axios from 'axios';
import Api from './Api';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newtodo:"",
      todolist:this.props.todos,
      current:
      {
        todotext:"",
        index:-1
      },
      notification:""
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNewEntry= this.handleNewEntry.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  componentDidMount(){

    axios.get(`${Api.url()}/api/v1/todos.json`)
      .then(response => {
        this.setState({todolist:response.data})
      })
      .catch(error => console.log(error))

  }

  handleAdd(){
    axios.post(`${Api.url()}/api/v1/todos`,  {todo:{text:this.state.newtodo}})
      .then(response => {
        this.setState((prevState)=>(
          {
            todolist:prevState.todolist.concat(response.data),
            newtodo:"",
            notification:"new todo created..."
          }
        ));
      })
      .catch(error => console.log(error))


  }
  handleClick(current){

    if (current == this.state.current.index)
    {
      this.setState({current:{index:-1}})
    }
    else{
    const id = this.state.todolist[current].id;
    console.log( "just clicked i:" + id);
    axios.get(`${Api.url()}/api/v1/todos/${id}`)
    .then(response => {
      console.log(current);
      this.setState(prevState => {
        prevState.todolist[current] =response.data;
      return          {
        newtodo:"",
        current:
        {
          todotext: "",
          index:current,
        },
        todolist:prevState.todolist,
        notification:"todo retrieved..."
      };

    });
    console.log(response.data);
    })
      .catch(error => console.log(error))
    }
/*
    axios.get(`${Api.url()}/api/v1/todos/${id}/histories`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))

    this.setState((prevState) =>(
      {
        current:
        {
          todotext: prevState.todolist[newvalue].text,
          index:newvalue
        }
      }
    ));
    */
  }
  handleNewEntry(newvalue){
    this.setState(
      {
        newtodo:newvalue,
        current:
        {
          todotext: "",
          index:-1
        },
        notification:""
      });
  }
  handleDelete(){
    const id= this.state.todolist[this.state.current.index].id;
    axios.delete(`${Api.url()}/api/v1/todos/${id}`)
      .then(response => {
        this.setState((prevState)=>(
            {
              todolist:prevState.todolist.filter((item,index)=>index!==this.state.current.index),
              newtodo:"",
              current:
              {
                todotext: "",
                index:-1
              },
              notification:"todo deleted..."
            }
        ));
      })
      .catch(error => console.log(error))



  }
  handleEdit(newvalue){
    this.setState((prevState)=>(
      {
        current:
        {
          todotext:newvalue,
          index:prevState.current.index
        },
        notification:""
      }));
  }
  handleUpdate(){
    const id= this.state.todolist[this.state.current.index].id;
    axios.put(`${Api.url()}/api/v1/todos/${id}`,  {todo:{text:this.state.current.todotext}})
      .then(response => {
        this.setState(function(prevState) {
          prevState.todolist[this.state.current.index] =response.data;
        return          {
          newtodo:"",
          current:
          {
            todotext: "",
            index:-1
          },
          todolist:prevState.todolist,
          notification:"todo updated..."
        };

      });
      })
      .catch(error => console.log(error))




  }

  render(){
    return(
      <div>
        <ToDoAdder
          newtodo={this.state.newtodo}
          onAddClicked={this.handleAdd}
          onEntryChanged = {this.handleNewEntry}/>
        <hr />
        <ToDoList
            todolist = {this.state.todolist}
            current = {this.state.current}
            onClick = {this.handleClick}
            onDelete= {this.handleDelete}
            onToDoChange={this.handleEdit}
            onUpdate={this.handleUpdate}/>
        <hr/>
        <span className="notification">{this.state.notification}</span>
      </div>
    )
  }
}

export default App;
