import React, {useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteCardsList from '../favorite-cards-list/favorite-cards-list';
import {CARD_PROP_TYPES} from '../../const/const';
import {Link} from "react-router-dom";
import {fetchFavoritesList} from "../../store/action-api";
import Loading from "../loading/loading";
import FavoritesEmpty from "../favorites-empty/favorites-empty";

const Favorites = (props) => {
  const {favoriteOffers, isFavoriteDataLoaded, onFavoriteLoadData, email} = props;
  useEffect(() => {
    if (!isFavoriteDataLoaded) {
      onFavoriteLoadData();
    }
  }, [isFavoriteDataLoaded]);

  if (!isFavoriteDataLoaded) {
    return (
      <Loading />
    );
  }
  if (favoriteOffers.length === 0) {
    return (
      <FavoritesEmpty />
    );
  }
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{email}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteCardsList items={favoriteOffers}/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
};
const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
  isFavoriteDataLoaded: state.isFavoriteDataLoaded,
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteLoadData() {
    dispatch((fetchFavoritesList()));
  },
});

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  isFavoriteDataLoaded: PropTypes.bool.isRequired,
  onFavoriteLoadData: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
