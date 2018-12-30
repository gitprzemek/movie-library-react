import React from 'react';

const Card = (props) => { 

    function shortText() {
        const maxText = document.getElementsByClassName("movie-container__text");
        for (let i = 0; i < maxText.length; i++) {
            if (maxText[i].className == "movie-container__text") {
                maxText[i].innerHTML = maxText[i].innerHTML.substring(0, 210) + '<span>...</span>';
            }
        }
    }
    shortText();
    console.log(shortText);
    const { item } = props;
        return (
            <div className="movie-container">
                <img src= {"https://image.tmdb.org/t/p/w185/" + item.poster_path} alt="NO PHOTO" className="movie-container__img" />
                <div className="movie-container__about">
                    <span className="movie-container__percent">{item.vote_average}</span>
                    <h2 className="movie-container__title">{item.original_title}</h2>
                    <p className="movie-container__date">{item.release_date}</p>
                    <p className="movie-container__text">{item.overview}</p>
                    <a href={"https://www.themoviedb.org/movie/" + item.id} className="movie-container__more">MORE</a>
                </div>
            </div>
            
            )
}

export default Card;