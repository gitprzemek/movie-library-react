// import React from 'react';
import React, { Component } from 'react';
// import Card from "./MovieListComponents/Card";
import ListApp from './MovieListComponents/ListApp';
import Navigation from "./MovieListComponents/Nav";

const MovieLists = () => {
    return (

        <div>
            <Navigation/>
            <section className="main-container">
                <ListApp />
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