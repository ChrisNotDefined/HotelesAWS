import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
import BodyComponent from './Components/BodyComponent'
import NotFoundComponent from './Components/NotFoundComponent'
import DetailHotel from './Components/DetailHotel'
import FavoriteList from "./Components/FavoriteList";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <BodyComponent/>
          </Route>
          <Route path="/favorites">
            <FavoriteList/>
          </Route>
          <Route path="/detail">
            <DetailHotel/>
          </Route>
          <Route path="*">
            <NotFoundComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  ); 
}



export default App;
