import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddFeature from './components/AddFeature';
import History from './components/History';
import LoadGame from './components/LoadGame';
import Main from './components/Main';
import NewGame from './components/NewGame';
import Player from './components/Player';
import System from './components/System';
import GameContext from './context/game-context';
import ModalContext from './context/modal-context';
import { gameReducer } from './reducers/gameReducer';

function App() {
  const loadedGames = JSON.parse(localStorage.getItem('savedGames'))
  const lastGame = loadedGames ? loadedGames[loadedGames.length - 1] : {}
  const [game, dispatch] = useReducer(gameReducer, lastGame)
  const [modalIsOpen, setIsOpen] = useState(false)
  
  const openModal = () => {
      setIsOpen(true)
  }

  const closeModal = () => {
      setIsOpen(false)
  }
  

  return (
      
        <Router>
          <h1>Placeholder</h1>          
          <GameContext.Provider value={{game, dispatch}}>
            <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/history" component={History} />
                <Route exact path="/loadgame" component={LoadGame} />
                <Route exact path="/newgame" component={NewGame} />
                <Route exact path="/players/:id" component={Player} />
                <Route exact path="/players/:id/:featurename" component={AddFeature} />
                <Route exact path="/system" component={System} />
              </Switch>
            </ModalContext.Provider>
          </GameContext.Provider>
        </Router>
      
  );
}

export default App;
