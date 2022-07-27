
import React from 'react';
import './App.css';
import HelloFunctional from './Components/HelloFunctional';
import HelloClass from './Components/HelloClass';
import {HelloFunctionalES6} from './Components/HelloFunctionaES6';
import Display from './Components/Display';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter'


function App() {
  return (
    
 <div className="App">
   {/* 
    <h2>Hello App Component</h2> 
    <HelloFunctional></HelloFunctional>
    <HelloFunctional/>
    <HelloClass name = "Sofia" age = "23"/>
    <HelloClass name = "Marcos" age = "39"/>
    <HelloFunctionalES6/>

    <Display firstName = "Mario" lastName = "Espitia" age = "27">
      <p>Some text data from Mario</p>
      </Display> <br/>
    <Display firstName = "Alba" lastName = "Martinez" age = "67">
      <input type="text" placeholder="Enter your details"/>
    </Display>
  */
   /* <Welcome />*/
}

<Counter/>
    </div>
 
  );
}

export default App;
