import React from "react";
import {StrictMode} from 'react';
import ReactDOM from "react-dom";
import {legacy_createStore as createStore} from 'redux';
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import createAPI from "./services/api";
import {reviews} from "./mocks/offers";
import {reducer} from "./store/reducer";
import {cities, SORT_TYPES} from "./const/const";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <StrictMode>
      <Provider store = {store}>
        <App
          reviews = {reviews}
          cities = {cities}
          sortList ={SORT_TYPES}
        />
      </Provider>
    </StrictMode>,
    document.querySelector(`#root`)
);

