import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Favorities from "../favorites/favorites";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Property from "../property/property";
import {CARD_PROP_TYPES, REVIEW_PROP_TYPES} from '../../const/const';

const App = (props) => {
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/favorites">
          <Favorities favoriteCards={offers}/>
        </Route>
        <Route exact path="/offer/:id">
          <Property
            propertyReviews={reviews}
            nearOffers={offers.slice(0, 3)}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  reviews: PropTypes.arrayOf(REVIEW_PROP_TYPES).isRequired
};

export default App;
