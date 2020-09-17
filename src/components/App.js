import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Error from './Error';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MoviesList from '../features/movies/MoviesList';
import MovieDetails from '../features/movies/MovieDetails';

function App() {
  
  return (
    <div className="container-fluid app">
      
      <Router>
      <Nav/>
        <Switch>
          <Route exact path="/movies" component={MoviesList}/>
          <Route exact path="/movies/:id" component={MovieDetails}/>
          <Route component={Error}/>
        </Switch>
         
      </Router>
    </div>
  );
}

export default App;
