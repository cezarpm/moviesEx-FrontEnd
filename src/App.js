import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Pages/Home/Home';
import WatchedMovies from './Components/Pages/WatchedMovies/WatchedMovies';
import NotWatchedMovies from './Components/Pages/NotWatchedMovies/NotWatchedMovies';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notwatchedmovies" exact>
          <NotWatchedMovies />
        </Route>
        <Route path="/watchedmovies" exact>
          <WatchedMovies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
