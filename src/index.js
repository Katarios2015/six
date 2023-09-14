import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {offers, reviews} from './mocks/offers';

ReactDOM.render(
    <App
      offers = {offers}
      reviews = {reviews}
    />,
    document.querySelector(`#root`)
);

