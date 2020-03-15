import React  from 'react';
import "./index.css";

const Content=(props)=> {
   
   
      return (
         <div className="content-style">
            <h2>my job is {props.job}</h2>
            <input type="text"   placeholder="enter ur job plz" onChange={props.change}/>
            
            
         </div>
      );
   
    
   
}
 
 export default Content;