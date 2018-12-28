import React from 'react';

const Card = () => {
    return (
        <div className="movie-container">
            <img src="images/madmax.jpg" alt="movie-image" className="movie-container__img" />
            <div className="movie-container__about">
                <span className="movie-container__percent">84%</span>
                <h2 className="movie-container__title">Lord of the Rings</h2>
                <p className="movie-container__date">September 12, 2018</p>
                <p className="movie-container__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero
                    at iste velit quo sint aspernatur ea quaerat officiis, illum unde cumque! Laboriosam, ea id?</p>
                <span className="movie-container__star"><input type="checkbox" className="ss" /></span>
            </div>
        </div>
    )
}

export default Card;