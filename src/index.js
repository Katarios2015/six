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
// import {reviews} from "./mocks/offers";
import {reducer} from "./store/reducer";
import {cities, SORT_TYPES} from "./const/const";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/action-api";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(false))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        // Начнём с конфигурирования хранилища. Подключим `redux-thunk` в список
    // middlewares. Аргументом для `thunk` передадим сконфигурированный
    // экземпляр `axios`, чтобы была возможность обратиться к нему из действия
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());// необходимо на случай если позьватель неавторизован, но заходит на страницу куда можно только авторизованным пользователям, те проеверяем статус авторизации.

ReactDOM.render(
    <StrictMode>
      <Provider store = {store}>
        <App
          cities = {cities}
          sortList ={SORT_TYPES}
        />
      </Provider>
    </StrictMode>,
    document.querySelector(`#root`)
);

