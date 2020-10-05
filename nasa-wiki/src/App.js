import React from 'react';
import './App.css';
import Album from './Components/Album.js'
import Home from   './Components/Home.js'
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/album" component={Album}/>
           </Switch>
        </div> 
      </BrowserRouter>

    </div>
  );
}

export default App;
