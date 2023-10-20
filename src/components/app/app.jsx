import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Favorities from "../favorites/favorites";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Property from "../property/property";
import {REVIEW_PROP_TYPES} from '../../const/const';
import PrivateRoute from "../private-route/private-route";


const App = (props) => {
  const {reviews, cities, sortList} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cities={cities} sortList={sortList}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <PrivateRoute exact
          path="/favorites"
          render={() => <Favorities />}
        >
        </PrivateRoute>
        <Route exact path="/offer/:id">
          <Property
            propertyReviews={reviews}
            nearby={true}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
};


App.propTypes = {
  reviews: PropTypes.arrayOf(REVIEW_PROP_TYPES).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortList: PropTypes.arrayOf(PropTypes.string).isRequired,
  nearby: PropTypes.bool
};

export default App;
