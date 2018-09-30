import React, { Component } from 'react';
import './App.css';

import './Components/todos.js'
import Todo from './Components/todos.js';



class App extends Component {

  constructor(){
    super();
    this.state = {
      text1: 'WelCome to React',
      condition: true,
      list : ['Shoping clothes','Window Shoping ','Studying','Married','Swimming','Cooking'],
      numbers : [1,2,3,4,5,6],
       result : []  }
  }
    
    //  Search Method 
    search(e){
      const { list } = this.state;
      const text = e.target.value; 
      // console.log('this', e.target.value);
      const result =  list.filter(wishes => {
        const lowerItem = wishes.toLowerCase();
        const lowerText = text.toLowerCase();
        return lowerItem.substring(0, lowerText.length).indexOf(lowerText) !== -1
      })
      console.log(result,'result');
      this.setState({result ,text});
      }

      // Slider Text on button change yellow 
     updateState(){
     this.setState({
       text1 : this.state.condition ? 'I love sylani' : 'My Name is Suleman',
       condition : !this.state.condition
     })
   }
    
   // Red Button for Alert chekcing the passing props
    checkprops(y){
     alert(y);
       }
 
    //  Stirng List for Searching
   myList(){
     const {list , result} = this.state;
     const items = result.length ? result : list;
     return(
<<<<<<< HEAD
       <div> <h1>The Wished </h1>
=======
       <div> <h1>The Wished List </h1>
>>>>>>> fb56c2b5a3088ed682f946533a1bbc2d36feee5a
       <ol> {items.map(function(wishes){
        //  return <li> {wishes} </li> 
         return <li key={`${wishes}`}> {wishes} </li> 
         })}    </ol>
       </div>
     ) 
   }
  //  Number Arrays for searching
   myList2(){
    const { numbers } = this.state;
    return(
      <div> <h1> Search Numbers </h1>
     {numbers.map(function(num){
       //  return <li> {wishes} </li> 
        return <li key={`${num}`}> {num} </li> 
        })}  
      </div>
    ) 
  }


   renderFooter(){
     return(
      <div className="well foot col-md-12 sm-12">  
       <div className="row">
       <div className="col-md-4 col-sm-4">    </div>
       <div className="col-md-4 col-sm-4" >      </div>
       <div className="col-md-4 col-sm-4">    </div>
       </div>  </div>
     );
   }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <header className="App-header col-md-12">
           <h1 className="App-title text  ">{this.state.text1}</h1> 
         </header> 
      </div> 

      <div className="row">
           <p className="col-md-1">    </p>
            <button className="col-md-4 btn btn-warning  btn-group-justify" onClick={() => this.updateState()}> <h4>Change Name</h4> </button>          
           <p className="col-md-2">    </p>
           <button className="col-md-4 btn btn-danger  btn-group-justify" id="but" onClick={() => this.checkprops('props')}> <h4>Passing Props</h4> </button>         
           <p className="col-md-1">    </p>
     </div>


      <div className="container search">
       <div className="row">
        <div className="col-md-4 col-sm-4"> <h2>Search Here </h2>
         <div className="w3-third">
       <input className="w3-input w3-border" type="text" id="wsearch" 
       placeholder="Search the wishes" onChange={this.search.bind(this)} />
        </div> </div>
      <div className="col-md-4 col-sm-4"> <span> {this.myList()}  </span> </div> 
      <div className="col-md-4 col-sm-4">     <span> {this.myList2()}  </span>        </div>  </div>
     </div>
  
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 todo">
       <Todo />
      </div>
     
      <div className="col-md-6">        </div>
    </div>
  
  </div>




        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
