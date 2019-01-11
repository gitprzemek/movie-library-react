import React from 'react';

const Card = (props) => { 
    
    const { item } = props;
    
        return (
            
            <div className="movie-container" >
                <img src= {"https://image.tmdb.org/t/p/w185/" + item.poster_path} alt="NO PHOTO" className="movie-container__img" />
                <div className="movie-container__about">
                    <span className="movie-container__percent">{item.vote_average}</span>
                    <h2 className="movie-container__title">{item.original_title}</h2>
                    <p className="movie-container__date">{item.release_date}</p>
                    <p className="movie-container__text" >{(item.overview).substring(0, 210)+"..."}</p>
                    <a href={"https://www.themoviedb.org/movie/" + item.id} className="movie-container__more">MORE</a>
                </div>
            </div>
            
            )
}

export default Card;
