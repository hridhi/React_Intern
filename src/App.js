import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';        
import home from './componenets/info';
import task from './componenets/task';
class App extends Component {
  render() {
    return (
<BrowserRouter>
        
            <Switch>
            <Route path="/" component={home} exact/>
            <Route path="/" component={task}/>
           </Switch>
      </BrowserRouter> 
    );
  }
}


export default App;
