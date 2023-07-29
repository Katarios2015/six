import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Favorities from "../favorites/favorites";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Property from "../property/property";


const App = (props) => {
  const {cardsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cardsCount={cardsCount}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/favorites">
          <Favorities/>
        </Route>
        <Route exact path="/offer/:id">
          <Property/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
