import React from 'react';
import "./index.css";
class Data extends React.Component {
    constructor(props){
        super(props);
        /* we will store the input value in the newTask
           and handle this with the event Handler
           ok now we can add this task to the array userList                                                 */
        this.state={
          newTask:"",
          userList:[]
          };
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    changeHandler=(e)=>{
        this.setState({newTask:e.target.value});
    }
    submitHandler=(e)=>{
      //prevent button from default behaviour "refresh the page"
       e.preventDefault();
       //we store the object newTask with unique id in our var newItem
       const newItem ={
         newTask:this.state.newTask,
         id:Date.now()
        
        }
        //lol now it's time for magic :D
        //we gonna update our userList with our var newItem
        //after this newTask will be empty again as default to gain more tasks
        this.setState(state => ({
          userList: state.userList.concat(newItem),
          newTask: ''
        }));
      }
      render() {
        return (
          <div className="toDo">
            <div><h2> Daily Tasks To Do</h2></div>
            <div>
            <form>
            <p>Write your task here:</p>
            <input
              type="text"
              value={this.state.newTask}
              onChange={this.changeHandler}
            />
            
            <button onClick={this.submitHandler}>submit</button>
          </form>
            </div>
            <div>
            <TodoList userList={this.state.userList}/>
            </div>
          
          </div>
        );
      }
    }
    
      
    class TodoList extends React.Component {
      render() {
        return (
          <ul className="list-style">
            {this.props.userList.map(item => (
              <li key={item.id}>{item.newTask}<button>x</button></li>
            ))}
          </ul>
        );
      }
    } 

export default Data