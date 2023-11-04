import React, {useEffect} from "react";
import CitiesList from '../cities-list/cities-list';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {cities, APP_ROUTE} from "../../const/const";
import {getEmail} from "../../store/auth-data/selectors";
import {getCityName} from "../../store/city/selectors";
import {getAuthStatus} from "../../store/auth-check/selectors";
import {checkAuth} from "../../store/action-api";

const MainEmpty = (props) => {
  const {email, cityName, authorizationStatus, isAuth} = props;

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={APP_ROUTE.MAIN} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {
                  authorizationStatus ?
                    <li className="header__nav-item user">
                      <Link to={APP_ROUTE.FAVORITES} className="header__nav-link header__nav-link--profile" >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{email}
                        </span>
                      </Link>
                    </li> :
                    <li className="header__nav-item user">
                      <Link to={APP_ROUTE.LOGIN} className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
};

MainEmpty.propTypes = {
  email: PropTypes.string,
  cityName: PropTypes.string.isRequired,
  isAuth: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  email: getEmail(state),
  cityName: getCityName(state),
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  isAuth() {
    dispatch((checkAuth()));
  },
});

export {MainEmpty};
export default connect(mapStateToProps, mapDispatchToProps)(MainEmpty);
