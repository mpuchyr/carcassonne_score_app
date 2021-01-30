import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddFeature from './components/AddFeature';
import History from './components/History';
import Main from './components/Main';
import NewGame from './components/NewGame';
import Player from './components/Player';
import System from './components/System';
import GameContext from './context/game-context';
import { gameReducer } from './reducers/gameReducer';

function App() {
  const [game, dispatch] = useReducer(gameReducer, {})
  
  return (
      
        <Router>
          <h1>Placeholder</h1>          
          <GameContext.Provider value={{game, dispatch}}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/history" component={History} />
              <Route exact path="/newgame" component={NewGame} />
              <Route exact path="/players/:id" component={Player} />
              <Route exact path="/players/:id/:featurename" component={AddFeature} />
              <Route exact path="/system" component={System} />
            </Switch>
          </GameContext.Provider>
        </Router>
      
  );
}

export default App;
