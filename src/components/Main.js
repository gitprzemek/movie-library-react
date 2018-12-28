import React from 'react';
import { NavLink } from "react-router-dom";

// import images
import MovieTapepurPlecircle from "../styles/images/movie-tape-purplecircle.png";
import MovieTapePurplecircleSide from "../styles/images/movie-tape-purplecircle-side.png";
import ArrowBlue from "../styles/images/arrow-blue.svg";
import ArrowPurple from "../styles/images/arrow-purple.svg";
import ArrowWhite from "../styles/images/arrow-white.svg";

const Main = () => {
    return (
        <div>
            <section className="container">
                <div className="container__logo">
                    <div className="container__rectangle container__rectangle--blue"></div>
                    <div className="container__rectangle container__rectangle--red">
                        <img src={MovieTapepurPlecircle} alt="popcorn" className="container__img container__img--circle" />
                        <img src={MovieTapePurplecircleSide} alt="popcorn" className="container__img" />
                    </div>
                    <header className="header">
                        <h1 className="header__name"><span className="header__ele--1">My</span><br/> m<span className="header__ele--2">o</span>vie<br/>
                            <span className="header__ele--3">l</span>ibrary</h1>
                    </header>
                    <div className="container__arrows">
                        <img src={ArrowBlue} alt="" className="container__arrow container__arrow--first"/>
                        <img src={ArrowPurple} alt="" className="container__arrow container__arrow--sec"/>
                        <img src={ArrowWhite} alt="" className="container__arrow container__arrow--thirth"/>
                        
                    </div>
                </div>
        

            <div className="container__buttons">
                <NavLink to="/Movie-lists" className="container__btn">Search movies</NavLink>
            </div>
            </section>
        </div>
    )
}
export default Main;