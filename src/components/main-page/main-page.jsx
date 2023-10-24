import React, {useState} from "react";
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import {CARD_PROP_TYPES} from '../../const/const';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import SortForm from '../sort/sort';
import {ActionCreator} from "../../store/action";

import Loading from "../loading/loading";
import {fetchOffersList, checkAuth} from "../../store/action-api";
import {useEffect} from 'react';


const MainPage = (props) => {

  const {offers, propertyes, cities, cityName, sortList, sortType, authorizationStatus, isDataLoaded, email, onLoadData, isAuth} = props;
  const placesCount = propertyes.length;
  const [activeCard, setActiveCard] = useState(null);
  const handleCardMouseOver = (item) => {
    setActiveCard(item);
  };
  const handleCardMouseOut = () => {
    setActiveCard(null);
  };

  useEffect(() => {
    isAuth();
  }, []);


  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }


  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {authorizationStatus ?
                    <li className="header__nav-item user">
                      <Link to="/favorites" className="header__nav-link header__nav-link--profile" >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{email}</span>
                      </Link>
                    </li> :
                    <li className="header__nav-item user">
                      <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList cities={cities}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCount} places to stay in {cityName}</b>
                <SortForm
                  sortList={sortList}
                  propertyes={propertyes}/>
                <CardsList
                  offers={offers}
                  nearbyFlag={false}
                  sortType={sortType}
                  handleCardMouseOver = {handleCardMouseOver}
                  handleCardMouseOut = {handleCardMouseOut}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    cityName={cityName}
                    mapOffers={propertyes}
                    activeCard = {activeCard}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  propertyes: state.propertyes,
  cityName: state.cityName,
  sortType: state.sortType,
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
  email: state.email,
  avatarUrl: state.avatarUrl,
});


MainPage.propTypes = {
  propertyes: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  offers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortList: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityName: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isAuth: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
};


const mapDispatchToProps = (dispatch) => ({
  sort(sortType) {
    dispatch(ActionCreator.sort(sortType));
  },
  addPropertyes(cityName, offers, sortType) {
    dispatch(ActionCreator.addPropertyes(cityName, offers, sortType));
  },
  onLoadData() {
    dispatch((fetchOffersList()));
  },
  isAuth() {
    dispatch((checkAuth()));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
