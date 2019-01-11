import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

class Navigation extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    };
    
    // toggle Class after click menu and li elements or X
    toggleClass(){
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    getNewUrl(event){
        this.props.callback(event.target.getAttribute('url'));
        // console.log(event.target.getAttribute('url'))
    }

    render(){
        return(
            <nav className="navigation">   
                <NavLink to="/" className="navigation__link navigation__link--back"><span className="fa fa-angle-left navigation__icon"></span></NavLink>
                <button id="navBtnOpen" className="navigation__link navigation__link--list" onClick={this.toggleClass}>
                    <span className="fa fa-bars navigation__icon"></span>
                    <span className="navigation__title">MOVIE LISTS</span>
                </button>
                <div id="navList" className={"navigation__list " + (this.state.active ? 'navShow': null)}>
                    <button id="navBtnClose" className={"navigation__list-btn " + (this.state.active ? 'showXBtn': null)}><span className="fa fa-times" onClick={this.toggleClass}></span></button>

                    <div className="navigation__list-cont" onClick={this.toggleClass}>
                        <a href="#" className="navigation__list-item" id="popular" url={"https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=1"} onClick={this.getNewUrl.bind(this)}>Most popular</a>

                        <a href="#" className="navigation__list-item" id="nowPlaying" url={"https://api.themoviedb.org/3/movie/now_playing?api_key=642874b006093ef1d8becb7a5a90179c&page=1"} onClick={this.getNewUrl.bind(this)}>Now playing</a>

                        <a href="#" className="navigation__list-item" id="topRated" url={"https://api.themoviedb.org/3/movie/top_rated?api_key=642874b006093ef1d8becb7a5a90179c&page=1"} onClick={this.getNewUrl.bind(this)}>Top rated</a>

                        <a href="#" className="navigation__list-item" id="upcoming" url={"https://api.themoviedb.org/3/movie/upcoming?api_key=642874b006093ef1d8becb7a5a90179c&page=1"} onClick={this.getNewUrl.bind(this)}>Upcoming</a>
                    </div>
                </div>
            </nav>
        )
    }
}
// Navigation.protoTypes = {
//     callback : PropTypes.func,
//     };
export default Navigation;