import React from "react";
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Favorities from "../favorites/favorites";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Property from "../property/property";
import {APP_ROUTE} from '../../const/const';
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
/* Компонент `BrowserRouter` автоматически создаёт объект для работы с
историей. В прошлом шаге мы решили сделать это самостоятельно.

Раз так, то нам необходимо чтобы `Router` пользовался нашим экземпляром
объекта `history`, а не собственным.

К сожалению, компонент `BrowserRouter` не позволяет этого сделать,
но в пакете `react-router-dom` есть другой компонент – `Router`.
Основное его отличие от `BrowserRouter` — конфигурируемость.

Например, чтобы воспользоваться нашим экземпляром `history`, достаточно
передать его в соответствующий пров, в `history`. */

const App = (props) => {
  const {cities, sortList} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage cities={cities} sortList={sortList}/>
        </Route>
        <Route exact path={APP_ROUTE.LOGIN}>
          <Login/>
        </Route>
        <PrivateRoute exact
          path={APP_ROUTE.FAVORITES}
          render={() => <Favorities />}
        >
        </PrivateRoute>
        <Route exact path={APP_ROUTE.OFFER_ID}>
          <Property
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
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortList: PropTypes.arrayOf(PropTypes.string).isRequired,
  nearby: PropTypes.bool
};

export default App;
