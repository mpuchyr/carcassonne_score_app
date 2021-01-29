import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import History from './components/History';
import NewGame from './components/NewGame';
import Player from './components/Player';
import System from './components/System';
import GameContext from './context/game-context';

function App() {
  const [game, setGame] = useState({})
  
  return (
      
        <Router>
          <h1>Placeholder</h1>          
          <GameContext.Provider value={{game, setGame}}>
            <Switch>
              <Route exact path="/history" component={History} />
              <Route exact path="/newgame" component={NewGame} />
              <Route exact path="/players/:id" component={Player} />
              <Route exact path="/system" component={System} />
            </Switch>
          </GameContext.Provider>
        </Router>
      
  );
}

export default App;
