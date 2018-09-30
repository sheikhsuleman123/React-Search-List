import React, { Component } from 'react';
import './todos.css';

class Todo extends Component {
  constructor() {
    super();
    this.state={
      todos:[],
      text2: " ",
    }
    this.add = this.add.bind(this);
    this.updatetext = this.updatetext.bind(this);
  }

  updatetext(e){
    this.setState({text2: e.target.value})
  }
  // add(){
  //       const {text2, todos} = this.state; 
  //       todos.push(text2);
  //       this.setState({todos, text2 : " "}); 
  //       // console.log('hallo',this.state.todos);
  // }
  edit(index){
   const { todos } = this.state;
   this.setState({text : todos[index]})
  }

renderTodos(){
const {todos} = this.state;
return  <ol>   {todos.map((item, index) =>{
return <li>{item}
       <button onClick={this.edit.bind(this, index)}> Edit </button>         </li> })}
</ol>
}

  render() {
    return (
      <div>
        <h1> Todos Items </h1>
        <input placeholder="Enter the Item.."  onChange={this.updatetext} value={this.state.text2} />
        <button onClick={this.add }> Add  </button>

        {this.renderTodos()}
      </div>
    );
  }
}

export default Todo;
