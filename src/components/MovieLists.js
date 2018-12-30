// import React from 'react';
import React, { Component } from 'react';
// import Card from "./MovieListComponents/Card";
import ListApp from './MovieListComponents/ListApp';

const MovieLists = () => {
    return (
        <div>
            <nav className="navigation">
                <a href="index.html" className="navigation__link navigation__link--back"><span className="fas fa-angle-left navigation__icon"></span></a>
                <button id="navBtnOpen" className="navigation__link navigation__link--list"><span className="fas fa-bars navigation__icon"></span>
                    <span className="navigation__title">MOVIE LISTS</span></button>
                <div id="navList" className="navigation__list">
                    <button id="navBtnClose" className="navigation__list-btn"><span className="fas fa-times"></span></button>
                    <div className="navigation__list-cont">
                        {/*<a href="#" className="navigation__list-item" id="popular">Most popular</a>
                        <a href="#" className="navigation__list-item" id="nowPlaying">Now playing</a>
                        <a href="#" className="navigation__list-item" id="topRated">Top rated</a>
    <a href="#" className="navigation__list-item" id="upcoming">Upcoming</a>*/}
                    </div>
                </div>

            </nav>
            <section className="main-container">
                <section className="movie-section" id="movie-section">
                    <ListApp />
                </section>
                <section className="btns-container" id="btns-container">
                    <button className="btns-container__btn btns-container__btn--left" id="prevBtn"><span className="fas fa-caret-left"></span></button>
                    <button className="btns-container__btn btns-container__btn--right" id="nextBtn"><span className="fas fa-caret-right"></span></button>
                </section>

            </section>
            <section className="search-section">
                <form role="search" className="search-form">
                    <input type="text" size="10" className="search-form__input" id="search-form__input" placeholder="Search..." />
                    <button type="button" className="search-form__btn" id="search-form__btn"><span className="fas fa-search search-form__icon"></span></button>
                </form>
            </section>
        </div>
    )
}
export default MovieLists;