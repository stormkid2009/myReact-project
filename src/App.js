/*state from react.js
we still trying to be familiaar with this ^^
ok we write the code in the logic area and render gonna do the  changes for us 
these are our observations about state we gonna update it with more details.
ok we stored the states inside parent component(App component) and pass the data via 
porps to the child components(Header and Content here)
last update : we changed Content and Header component from classs to arrow functions
thats much cleaner

*/

import React,{Component} from "react";
import "./index.css";
import Header from './Header';
import Content from './Content';
import Data from './Data'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"Sherif",
      age:41,
      isSmart:"true",
      job:"",
      nationality:"egyptian"
    };
    
  }
  changeName=()=>{
    this.setState({name:"Anwar"});
  }
  changeJob=(event)=>{
    this.setState({job:event.target.value});
  
  }
   changeHeading=(a)=>{
    console.log(a)
};

  
  render()
  {
    return (
      <div className="Main">
      
          { /*<Header name = {this.state.name}
          // here we will add a reference to the method in App Component
                  click={this.changeName}
          />
          
          <Content 
          // here we will pass changeJob handler as prop to child component
          //this handler take change the value of our state and pass it as props
          //to child component > job=the value of input text
          job={this.state.job}
          change={this.changeJob}
          />*/}
            
          <Data /> 
          
          
      </div>
  
    );
  }
  
}
export default  App