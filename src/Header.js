import React from 'react';

const header=(props)=>  {
      
       return (
          <div>
             <h1>my name is {props.name}</h1>
             <button type="button" onClick={props.click}>change name</button>
             
          </div>
       )
    }
   
    export default header;